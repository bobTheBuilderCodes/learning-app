import type { Dayjs } from 'dayjs';
import React from 'react';
import { Calendar, theme } from 'antd';
import type { CalendarProps } from 'antd';

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

const CustomCalendar: React.FC = () => {
  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    // width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div style={wrapperStyle} className=' bg-red-400'>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} className='' />
    </div>
  );
};

export default CustomCalendar;