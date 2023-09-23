import CustomTab from "@/shared/CustomTabs";
import Stepback from "@/components/Stepback";
import Heading from "@/constants/Heading";
import Paragraph from "@/constants/Paragraph";
import SubHeading from "@/constants/SubHeading";
import { api } from "@/libs/endpoints";
import { getQuotes, getUser, getUsers } from "@/libs/getData";
import { studentTabs, studentTabsContent } from "@/shared/tabs";
import { Avatar } from "antd";

import React from "react";

interface IProps {
  params: {
    userId: string;
  };
}
export default async function SingleUser({ params }: IProps) {
  const user = await getUser(api.singleStudent, params.userId);
  const currentUser = user.findStudent;

  // motivational quotes

  const quotes = await getQuotes(api.motivation);
  const currentQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const handleEvent = () => {
    alert("I hope this shit works well");
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-gray-100 to-gray-500 h-48 flex items-center justify-between px-4">
        <div>
          <Stepback>Profile</Stepback>
          <div className="flex items-center mt-3">
            <Avatar
              className="w-32 h-32 border-white border-[4px] mx-4"
              src="https://media.istockphoto.com/id/1264106976/photo/headshot-of-bearded-mid-adult-black-man-in-polo-shirt.jpg?s=170667a&w=0&k=20&c=laQvyYpXZi6wCrDjdz_G0u44Nc52coc3tl43LUhqZ28="
            />
            <div>
              <SubHeading className="font-bold">{`${currentUser.firstName} ${
                currentUser.middleName || ""
              } ${currentUser.lastName}`}</SubHeading>
              <SubHeading>J.H.S 2</SubHeading>
              <caption>{currentUser.email}</caption>
            </div>
          </div>
        </div>
        <div className="mx-6 w-96 font-bold text-xl text-gray-200">
          <Paragraph>{`${currentQuote.q} - ${currentQuote.a}`}</Paragraph>
        </div>
      </div>
      <CustomTab tabLength={4} labels={studentTabs}>
        {studentTabsContent}
      </CustomTab>
    </div>
  );
}

// export async function generateStaticParams() {
//   const users: Promise<allStudents> = getUsers(api.allStudents);
//   const { students } = await users;

//   return students.map((student) => ({
//     studentId: student.rollId.toString(),
//   }));
// }
