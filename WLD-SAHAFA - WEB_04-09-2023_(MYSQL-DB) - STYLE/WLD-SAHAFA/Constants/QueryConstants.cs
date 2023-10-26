using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WLD_SAHAFA.Constants
{
    public static class QueryConstants
    {
        //public const string GetCounterDetails = "select top 8 P_RECEIPT_NO as ReceiptNo,P_MWT_LOC as Direction,CounterNo as CounterNo from tb_patient_info";
        //public const string GetCounterDetails = "SELECT PI.P_RECEIPT_NO as ReceiptNo, C.COUNTER_ID as CounterNo FROM tb_patient_info AS PI JOIN COUNTER AS C ON PI.P_MWT_LOC = C.MWT_ID AND PI.P_DIRECTION = C.LOCATION_ID WHERE DATE(PI.P_RECEIPT_DAY) = CURDATE() AND PI.P_USER_ID = 'admin' ORDER BY PI.P_RECEIPT_NO DESC LIMIT 8";
        public const string GetCounterDetails = "SELECT PI.P_RECEIPT_NO as ReceiptNo, C.COUNTER_ID as CounterNo FROM tb_patient_info AS PI JOIN COUNTER AS C ON PI.P_MWT_LOC = C.MWT_ID AND PI.P_DIRECTION = C.LOCATION_ID WHERE DATE(PI.P_RECEIPT_DAY) = CURDATE() AND PI.P_USER_ID = 'admin' ORDER BY PI.P_MODIFY_TIME DESC LIMIT 8";

    }
}