import connection from "../Config/SqlConnection.js"

export const addNewNotification=async(time,date,status)=>{
    try {

        const rows=await new Promise((resolve,reject)=>{
            connection.query("INSERT INTO notifications (TIME, DATE, STATUS) VALUES (?, ?, ?)",
            [time,date,status],
            (err,row)=>{
                if (err) {
                    reject(err)
                }else{
                    resolve(row)
                }
            })
        })
        return rows;
    } catch (error) {
        throw error;
    }
}

export const getAllNotificationsbyDateTimeDesc=async()=>{
    try {

        const rows=await new Promise((resolve,reject)=>{
            connection.query("SELECT * from notifications order by DATE DESC,TIME DESC",
            (err,row)=>{
                if (err) {
                    reject(err)
                }else{
                    resolve(row)
                }
            })
        })
        return rows;
    } catch (error) {
        throw error;
    }
}
