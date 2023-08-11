import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  console.log("router", router);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const id = 1;
  const { data, error, isLoading } = useSWR(
    `https://swapi.dev/api/people/${id}`,
    fetcher
  );

  console.log("data", data);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to Load...</div>;
  }
  const { name, height, eye_color, birth_year } = data;
  return (
    <Layout>
      <Card
        id={id}
        name={name}
        height={height}
        eyeColor={eye_color}
        birthYear={birth_year}
      />
    </Layout>
  );
}
