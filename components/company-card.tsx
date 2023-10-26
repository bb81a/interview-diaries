import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";

const CompanyCard = () => {
  return (
    <Card className="max-w-[340px]">
      <CardHeader>
        <p className="text-xl">Microsoft</p>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>
          Microsoft Corporation is an American multinational technology
          corporation headquartered in Redmond, Washington. Microsofts
          best-known software products are the Windows line of operating
          systems, the Microsoft 365 suite of productivity applications, and the
          Edge web browser.
        </p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit Company Site.
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CompanyCard;
