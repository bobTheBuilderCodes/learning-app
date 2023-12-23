import Paragraph from "@/components/constants/Paragraph";




const BookCard: React.FC = () => (
 
  <div className='border-b-2 border-gray-50 rounded-md mb-0 p-4 cursor-pointer'>
    <Paragraph className="text-gray-900">Book title</Paragraph>
    <Paragraph className='text-gray-500'>This is the description of the book in the manchester united of the bla black sheep...</Paragraph>
  </div>
);

export default BookCard;