import { MDXProps } from "mdx/types";
import { ReactElement } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface CodingPreviewInterface {
  children: React.ReactNode;
  Mdx: (props: MDXProps) => ReactElement<any, any>;
}

export const CodingPreview = (props: CodingPreviewInterface) => {
  const { children, Mdx } = props;

  return (
    <Tabs defaultValue="preview" className="w-full bg-slate-900 rounded-lg">
      <div className="border-b border-b-slate-800">
        <TabsList className="bg-transparent">
          <TabsTrigger value="preview" asChild={true}>
            <button className="px-4 py-2 text-sm font-medium text-slate-400 data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:font-bold data-[state=active]:border-b-2 border-white data-[state=active]:rounded-none data-[state=inactive]:rounded-none">
              Preview
            </button>
          </TabsTrigger>
          <TabsTrigger value="code" asChild={true}>
            <button className="px-4 py-2 text-sm font-medium text-slate-400 data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:font-bold data-[state=active]:border-b-2 border-white data-[state=active]:rounded-none data-[state=inactive]:rounded-none">
              Code
            </button>
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="preview">{children}</TabsContent>
      <TabsContent value="code">
        <div className="rounded-xl pb-0 mb-0">
          <Mdx />
        </div>
      </TabsContent>
    </Tabs>
  );
};
