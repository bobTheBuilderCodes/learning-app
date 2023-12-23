import Paragraph from "@/components/constants/Paragraph";





const ActivityCard: React.FC = () => (
 
  <div className='border-b-2 border-gray-50 rounded-md mb-0 p-4 cursor-pointer'>
  <Paragraph className="text-gray-900">Activity title</Paragraph>
    <Paragraph className='text-gray-500'>This is the description of the activity in the manchester...</Paragraph>
    <span className="text-gray-400 font-bold">24th Jan. 2024</span>
  </div>
);

export default ActivityCard;