import { generalInsuranceLinks, lifeInsuranceLinks, searchLinks, workLinks } from "@/data/insuranceData";
import InsuranceLinkGrid from "./components/InsuranceLinkGrid";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <div className="col-span-1">
        <InsuranceLinkGrid title="생명보험사" links={lifeInsuranceLinks} />
      </div>
      <div className="col-span-1">
        <InsuranceLinkGrid title="손해보험사" links={generalInsuranceLinks} />
      </div>
      <div className="col-span-1 space-y-8">
        <InsuranceLinkGrid title="업무" links={workLinks} />
        <InsuranceLinkGrid title="검색" links={searchLinks} />
      </div>
    </main>
  );
}
