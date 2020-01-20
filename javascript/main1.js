var counter=0;
function adduser()
{
    var inputdata1=document.getElementById('fname').value;
    var inputdata2=document.getElementById('date').value;
    var inputdata3=document.getElementById('email').value;

    var html='<div class="row" id="data'+counter+'"style="margin-bottom:15px;">'+
    '<div class="col-md-2 col-sm-4 col-xs-5">'+
    '<input type="text" style="width:150px;" class="form-control" value="'+inputdata1+'"disabled>'+
    '</div>'+
    '<div class="col-md-2 col-sm-4 col-xs-5">'+
    '<input type="text" style="width:150px;" class="form-control" value="'+inputdata2+'"disabled>'+
    '</div>'+
    '<div class="col-md-2 col-sm-4 col-xs-5">'+
    '<input type="text" style="width:150px;" class="form-control" value="'+inputdata3+'"disabled>'+
    '</div>'+

    '<div class="col-md-2 col-sm-4 col-xs-4">'+
    '<button type="button" class="btn btn-success" onclick="edit(this.id)" id="edit'+counter+'">Edit</button>'+
    '</div>'+
    '<div class="col-md-2 col-sm-4 col-xs-4">'+
    '<button type="button" class="btn btn-success" onclick="update(this.id)" id="update'+counter+'">Update</button>'+
    '</div>'+
    '<div class="col-md-2 col-sm-4 col-xs-4">'+
    '<button type="button" class="btn btn-danger" onclick="remove(this.id)" id="delete'+counter+'">Delete</button>'+
    '</div>'+
    '</div>';

    document.getElementById('userlist').insertAdjacentHTML('beforeend',html);
    counter++;
}
function checkEmptyInput(){
    var isEmpty=false,
    fname=document.getElementById("fname").value,
    lname=document.getElementById("lname").value,
    email=document.getElementById("email").value;
    
    if(fname===""){
        alert("Name cannot be empty");
        isEmpty=true;

    }
   else if(lname===""){
     alert("Name cannot be empty");
     isEmpty=true;

 }
 else if(email===""){
     alert("email cannot be empty");
     isEmpty=true;

 }
 return isEmpty;
}
function edit(editId){
    var parent =   document.getElementById(editId).parentNode.parentNode;
          var child = parent.firstChild.firstChild;
          child.removeAttribute('disabled');
          console.log(child);
        }
        
  function update(updateId){
    var parent =   document.getElementById(updateId).parentNode.parentNode;
          var child = parent.firstChild.firstChild;
          child.setAttribute("disabled",'disabled');
          console.log(child);
        }
        
  function remove(deleteId){
    var parent =   document.getElementById(deleteId).parentNode.parentNode;
          parent.remove();
          console.log(parent);
        }
