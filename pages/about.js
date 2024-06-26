// Modules
import { SliceZone } from "@prismicio/react";

// Lib
import { createClient } from "prismicio";
import { components } from "slices";

// Components
import { DefaultLayout } from "components";

export default function About({ content }) {
  return (
    <main className="space-y-12">
      {content?.data?.slices && (
        <SliceZone slices={content?.data?.slices} components={components} />
      )}
    </main>
  );
}

About.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const content = await client.getSingle("about", {
    // graphQuery: homeGraphQuery,
  });
  return {
    props: { content },
  };
}
