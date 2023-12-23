import React from "react";

// Antd Components
import { Avatar } from "antd";

// Components
import CustomTab from "@/components/shared/CustomTabs";
import Stepback from "@/components/Stepback";
import Paragraph from "@/components/constants/Paragraph";
import SubHeading from "@/components/constants/SubHeading";

// Libs and Utils
import { api } from "@/libs/endpoints";
import { getQuotes, getSingleData } from "@/libs/getData";
import { studentTabs, studentTabsContent } from "@/components/shared/tabs";

interface IProps {
  params: {
    userId: string;
  };
}

export default async function SingleUser({ params }: IProps) {
  const user = await getSingleData({
    url: api.singleStudent,
    dataId: params.userId,
  }
  
  );


  const { firstName, middleName, lastName, email } = user.findStudent;

  // motivational quotes

  const quotes = await getQuotes(api.motivation);
  const { q: quote, a: author } =
    quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div>
      <div className="bg-gradient-to-r from-gray-100 to-gray-500 h-48 flex items-center justify-between px-4">
        <div>
          <Stepback className="text-gray-900">Profile</Stepback>
          <div className="flex items-center mt-3">
            <Avatar
              className="w-32 h-32 border-white border-[4px] mx-4"
              src="https://media.istockphoto.com/id/1264106976/photo/headshot-of-bearded-mid-adult-black-man-in-polo-shirt.jpg?s=170667a&w=0&k=20&c=laQvyYpXZi6wCrDjdz_G0u44Nc52coc3tl43LUhqZ28="
            />
            <div>
              <SubHeading className="font-bold text-gray-900">{`${firstName} ${
                middleName || ""
              } ${lastName}`}</SubHeading>
              <SubHeading className="text-gray-900">J.H.S 2</SubHeading>
              <p className="text-gray-500">{email}</p>
            </div>
          </div>
        </div>
        <div className="mx-6 w-96 font-bold text-xl text-gray-200">
          <Paragraph>{`${quote} - ${author}`}</Paragraph>
        </div>
      </div>
      <CustomTab tabLength={studentTabs.length} labels={studentTabs}>
        {studentTabsContent}
      </CustomTab>
    </div>
  );
}
 