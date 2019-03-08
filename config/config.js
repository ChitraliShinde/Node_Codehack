var host="http://localhost:8056/";

module.exports = function() {

    this.isDataEmpty= function (data) {

        if(data.length!="" && data.length!=0 && data.length!=null && data.length!="undefiend")
            return true;
        else
            return false
    }

    this.isSaved= function (data) {

        if(data.affectedRows==1)
            return true;
        else
            return false
    }

    this.isLoginCheck= function(req){
        var sess = req.session;
        if(sess.username){
            return true;
        }else{
            return false;
        }
    }
}