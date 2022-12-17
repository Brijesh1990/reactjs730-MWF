function validation()
{
    if(document.frm.nm.value=="")
    {
        alert('Please Enter Your Name')
        document.frm.nm.focus();
        return false;
    }
    var n=/^[A-Za-z]+$/;
    if(!n.test(document.frm.nm.value))
    {
        alert('Please Enter Your Name only in Alphabetic character')
        document.frm.nm.focus();
        return false;
    }

    if(document.frm.email.value=="")
    {
        alert('Please Enter Your Email')
        document.frm.email.focus();
        return false;
    }
    var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!e.test(document.frm.email.value))
    {
        alert('Please Enter Your valid email Address')
        document.frm.email.focus();
        return false;
    }


 
}