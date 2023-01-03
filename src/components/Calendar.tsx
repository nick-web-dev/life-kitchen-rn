import React from "react";
import { StyleSheet } from "react-native";
import CalendarStrip from "react-native-calendar-strip";

interface Props {
  setCurrentDate: (date: any) => void;
  currentDate: string;
}

const Calendar = ({ setCurrentDate, currentDate }: Props) => {
  return (
    <CalendarStrip
      setSelectedDate={(date: any) => {
        setCurrentDate(date);
      }}
      selectedDate={currentDate}
      scrollable
      calendarAnimation={{ type: "sequence", duration: 30 }}
      style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
      calendarHeaderStyle={{ color: "white" }}
      calendarColor={"#2C2C2C"}
      dateNumberStyle={{ color: "grey" }}
      dateNameStyle={{ color: "grey" }}
      highlightDateNumberStyle={{
        color: "white",
        fontWeight: "700",
        fontFamily: "Helvetica",
      }}
      highlightDateNameStyle={{
        color: "white",
        fontWeight: "700",
        fontFamily: "Helvetica",
      }}
      disabledDateNameStyle={{
        color: "grey",
        fontWeight: "700",
        fontFamily: "Helvetica",
      }}
      disabledDateNumberStyle={{
        color: "grey",
        fontWeight: "700",
        fontFamily: "Helvetica",
      }}
      headerText={"  "}
      iconLeft={""}
      iconRight={""}
    />
  );
};

const styles = StyleSheet.create({});

export default Calendar;
