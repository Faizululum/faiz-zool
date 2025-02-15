"use client";

import MeetingTypeList from '@/components/MeetingTypeList';
import { useGetCalls } from '@/hooks/useGetCalls';

const Home = () => {
  const now = new Date();
  const { upcomingCalls } = useGetCalls();

  const nextMeeting = upcomingCalls.length > 0
    ? upcomingCalls
      .filter(call => call.state?.startsAt)
      .reduce((prev, curr) => 
        new Date(prev.state.startsAt!).getTime() < new Date(curr.state.startsAt!).getTime() ? prev : curr, upcomingCalls[0])
    : null;
  
  const meetingTime = nextMeeting
    ? new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Jakarta",
    }).format(new Date(nextMeeting.state.startsAt!))
    : null;

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', {dateStyle: 'full'})).format(now);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex flex-col h-full justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[285px] rounded p-2 text-center text-base font-normal">
            {meetingTime ? `Upcoming Meeting at ${meetingTime}` : "No Upcoming Meetings"}
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              {time}
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">
              {date}
            </p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  )
}

export default Home