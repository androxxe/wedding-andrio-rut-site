import { prisma } from "@/services/prisma";
import { NextRequest } from "next/server";
import * as yup from "yup";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const limit = searchParams.get("limit") ? Number(searchParams.get("limit")) : 10;

  const wishes = await prisma.wishes.findMany({
    take: limit,
    skip: (page - 1) * limit
  });

  return Response.json({
    statusCode: 200,
    message: "Wishes retrieved successfully.",
    data: wishes,
    meta: {
      page,
      limit
    }
  });
}

export async function POST(request: Request) {
  try {
    const { name, wish } = await request.json();

    const schema = yup.object().shape({
      name: yup.string().required(),
      wish: yup.string().required()
    });

    try {
      await schema.validate({ name, wish }, { abortEarly: false });
    } catch (error: any) {
      return Response.json(
        {
          statusCode: 422,
          message: "PayloadInvalid",
          errors: error.errors
        },
        {
          status: 422
        }
      );
    }

    const newWish = await prisma.wishes.create({
      data: {
        name,
        wish
      }
    });

    return Response.json({
      statusCode: 201,
      message: "Wish created successfully.",
      data: newWish
    });
  } catch (error: any) {
    return Response.json(
      {
        statusCode: 500,
        message: error.message
      },
      {
        status: 500
      }
    );
  }
}
