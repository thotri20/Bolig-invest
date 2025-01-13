import { HOMEPAGE_QUERY } from "@/common/queries/pages/homepage.queries";
import HomeView from "@/common/view/home-view";
import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";


const getData = async () => {
  const initial = await sanityFetch({
    query: HOMEPAGE_QUERY,
  });

  return initial;
};

export default async function HomePage() {
  const data = await getData();

  if (!data || !data.data) return notFound(); 

  return (
    <>
      <HomeView data={data.data} />
    </>
  );
}