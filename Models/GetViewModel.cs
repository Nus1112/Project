using System;

namespace Transportation.Models
{

    public class GetPreregister
    {
        public string VisitorName { get; set; }
        public string VisitorLName { get; set; }

        public string VisitorID { get; set; }
        public string VisitorCompany { get; set; }
        public string VisitorEmail { get; set; }
        public string VisitorPhone { get; set; }
        public string VisitorLicense { get; set; }
        public string AppointDate { get; set; }
        public string EndDate { get; set; }
        public string VisitorReason { get; set; }
        public string HostDepartment { get; set; }
        public string HostEmail { get; set; }
        public string HostVerifiedEmail { get; set; }
        public string Floor { get; set; }
        public string radio13 { get; set; }
        public string radio14 { get; set; }
        public string radio15 { get; set; }
        public string VehicleType { get; set; }
        public string ConfirmUrl { get; set; }
        public string AppointTime { get; set; }
    }
    public class Login
    {
        public string User { get; set; }
        public string Password { get; set; }
    }
    public class search
    {
        public string License { get; set; }
        public string Card { get; set; }
    }
    public class searchqr
    {
        public string Card { get; set; }
    }
    public class ticket
    {
        public string Ticket { get; set; }
    }
    public class shop
    {
        public string Cardcode { get; set; }
        public string License { get; set; }
        public string Company { get; set; }
        public string Vehicle { get; set; }
        public string List { get; set; }
        public string Id { get; set; }
        public string Detail { get; set; }
        public string Entrygate { get; set; }
        public string Parkingtime { get; set; }
        public string User { get; set; }
        public string Ticket { get; set; }
        public string Condition { get; set; }
        public string Seq { get; set; }
    }
    public class webrate
    {
        public string Cardcode { get; set; }
        public string License { get; set; }
        public string Company { get; set; }
        public string Vehicle { get; set; }
        public string Id { get; set; }
        public string Detail { get; set; }
        public string Entrygate { get; set; }
        public string Parkingtime { get; set; }
        public string User { get; set; }
        public string Ticket { get; set; }
        public string List { get; set; }
        public string Seq { get; set; }
    }
    public class webratee
    {
        public string Cardcode { get; set; }
        public string License { get; set; }
        public string Company { get; set; }
        public string Vehicle { get; set; }
        public string Id { get; set; }
        public string Detail { get; set; }
        public string Entrygate { get; set; }
        public string Parkingtime { get; set; }
        public string User { get; set; }
        public string Ticket { get; set; }
        public string List { get; set; }
        public string Seq { get; set; }
        public string Idstamp { get; set; }
    }
    public class qrcode
    {
        public string Cardcode { get; set; }
        public string License { get; set; }
        public string Company { get; set; }
        public string Vehicle { get; set; }
        public string List { get; set; }
        public string Id { get; set; }
        public string Detail { get; set; }
        public string Entrygate { get; set; }
        public string Parkingtime { get; set; }
        public string User { get; set; }
        public string Ticket { get; set; }
        public string Condition { get; set; }
        public string Seq { get; set; }
    }
    public class checkrepetition
    {
        public string Id { get; set; }
        public string Seq { get; set; }

    }
    public class MA
    {
        public string Cardcode { get; set; }
        public string License { get; set; }
        public string Company { get; set; }
        public string Vehicle { get; set; }
        public string List { get; set; }
        public string Id { get; set; }
        public string Detail { get; set; }
        public string Entrygate { get; set; }
        public string Parkingtime { get; set; }
        public string User { get; set; }
        public string Ticket { get; set; }
        public string Condition { get; set; }
        public string Seq { get; set; }
    }
    public class discountReceip
    {
        public string Cardcode { get; set; }
        public string Money { get; set; }
        public string Receip { get; set; }
        public string Company { get; set; }
        public string Shop { get; set; }
        public string User { get; set; }
    }
    public class deleteReceip
    {
       
        public string Receipt { get; set; }
        
    }
    public class deletestamp
    {

        public string Id { get; set; }

    }
    public class searchcompany
    {
        public string Cardcode { get; set; }
        public Int32 Amountquery { get; set; }
        public string Ratetype { get; set; }
        public string User_id { get; set; }

    }
    public class searchma1 { 
        
        public string User_id { get; set; }

    }
    public class searchsh
    {

        public string User_id { get; set; }

    }
    public class searchsc
    {

        public string User_id { get; set; }

    }
    public class searchwebrate
    {
        public string Seq { get; set; }

    }
    public class checkstampreceipt
    {
        public string Seq { get; set; }
        public string Button { get; set; }

    }
    public class listdiscount
    {
        public string Cardcode { get; set; }

    }
    public class listdiscountuser
    {
        public string User { get; set; }
        public string startdate { get; set; }
        public string Enddate { get; set; }

    }
    public class limituser
    {
        public string User { get; set; }

    }
    public class deleterate
    {
        public string Idstamp { get; set; }

    }
    public class GetApprove
    {
        public string Urldata { get; set; }
        public string status { get; set; }
        public string AppointDate { get; set; }
        public string AppointTime { get; set; }
        public string EndTime { get; set; }
        public string ConfirmURL { get; set; }
    }
    public class Appointment
    {
        
        public DateTime AppointTime1 { get; set; }
        public DateTime EndTime2 { get; set; }
    }
    public class searchemail
    {
        public string input { get; set; }

    }
}
