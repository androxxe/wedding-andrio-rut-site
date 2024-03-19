import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import dayjs from "dayjs";
import { MdxCodeWishes, MdxWishes } from "../mdx";
import { CodingPreview } from "../organism";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

const schema = yup.object().shape({
  name: yup.string().required(),
  wish: yup.string().required()
});

type WishPayload = yup.InferType<typeof schema>;

const DUMMY_WISHES = [
  {
    name: "John Doe",
    wish: "I wish for world peace.",
    created_at: dayjs(Math.random() * 1000000000000).format("YYYY-MM-DD HH:mm:ss")
  },
  {
    name: "Samantha Smith",
    wish: "I wish for a new car.",
    created_at: dayjs(Math.random() * 1000000000000).format("YYYY-MM-DD HH:mm:ss")
  },
  {
    name: "Jane Doe",
    wish: "I wish for a new house.",
    created_at: dayjs(Math.random() * 1000000000000).format("YYYY-MM-DD HH:mm:ss")
  }
];

const onSubmit = (data: WishPayload) => {
  console.log(data);
};

export const Wishes = () => {
  const form = useForm<WishPayload>({
    defaultValues: {
      name: "",
      wish: ""
    },
    resolver: yupResolver(schema)
  });

  return (
    <div className="space-y-5">
      <MdxWishes />
      <CodingPreview Mdx={MdxCodeWishes}>
        <div className="space-y-5 p-5">
          <div className="max-w-2xl space-y-5">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-slate-950">Say Wedding Wish</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="mb-5">Wishes</DialogTitle>
                  <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input type="name" id="name" placeholder="Name" {...form.register("name")} />
                      {form.formState.errors?.name?.message && (
                        <span className="text-xs text-red-500">{form.formState.errors?.name?.message}</span>
                      )}
                    </div>
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="message">Wish</Label>
                      <Textarea placeholder="Type your wish here." {...form.register("wish")} />
                      {form.formState.errors?.name?.message && (
                        <span className="text-xs text-red-500">{form.formState.errors?.name?.message}</span>
                      )}
                    </div>
                    <div>
                      <Button type="submit">Save</Button>
                    </div>
                  </form>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <div className="space-y-3 max-h-96 overflow-y-auto overflow-scroll bg-slate-950 p-5 rounded-lg">
              {DUMMY_WISHES.map((wish, index) => (
                <div key={index} className="flex flex-row justify-between gap-2">
                  <div>
                    <div className="text-base font-bold">{wish.name}</div>
                    <div className="text-base">{wish.wish}</div>
                  </div>
                  <div className="text-xs text-slate-400">{wish.created_at}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CodingPreview>
    </div>
  );
};
