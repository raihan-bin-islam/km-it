import Image from "next/image";
import React from "react";

type Props = {};

const data: ManagementCardProps[] = [
  {
    name: "Yuki Nakamura",
    designation: "Chief Executive Officer",
    description: "Leading the vision and mission of the IT center.",
    image: "/management/management-1.jpg",
    checklist: ["Strategic Planning", "Executive Decisions", "Company Vision"],
  },
  {
    name: "Hiroshi Tanaka",
    designation: "Chief Technology Officer",
    description: "Overseeing the development and dissemination of technology.",
    image: "/management/management-2.webp",
    checklist: ["Technology Strategy", "Product Development", "Innovation"],
  },
  {
    name: "Aiko Suzuki",
    designation: "Chief Operating Officer",
    description: "Managing the daily operations of the IT center.",
    image: "/management/management-3.jpg",
    checklist: [
      "Operational Efficiency",
      "Process Improvement",
      "Resource Management",
    ],
  },
  {
    name: "Kenji Yamamoto",
    designation: "Chief Financial Officer",
    description: "Responsible for financial planning and record-keeping.",
    image: "/management/management-1.jpg",
    checklist: [
      "Financial Planning",
      "Budget Management",
      "Financial Reporting",
    ],
  },
];

export const Management = (props: Props) => {
  return (
    <div className="flex flex-col gap-8 max-w-7xl px-4 lg:px-20 mx-auto my-20">
      {data.map((item, index) => (
        <ManagementCard key={index} {...item} />
      ))}
    </div>
  );
};

type ManagementCardProps = {
  name: string;
  description: string;
  designation: string;
  checklist: string[];
  image: string;
};
const ManagementCard = ({
  name,
  designation,
  description,
  checklist,
  image,
}: ManagementCardProps) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-semibold text-secondary-800">{name}</h2>
        <p className="text-sm text-secondary-700">{designation}</p>
        <p>{description}</p>
        <ul>
          {checklist.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="relative w-96 h-96">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
    </div>
  );
};
