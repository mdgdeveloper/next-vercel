import DarkLayout from "../../components/layouts/DarkLayout";
import MainLayout from "../../components/layouts/MainLayout";
import Link from "next/link";

const Pricing = () => {
  return (<>
    <h1>Pricing Page</h1>
    <h1 className="title">
      Ir a <Link href="/">Home</Link>
    </h1>

    <p className="description">
      Editar desde: <code className="code">pages/pricing/index.js</code>
    </p>
  </>)
};

export default Pricing;

Pricing.getLayout = (page: JSX.Element) => {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
