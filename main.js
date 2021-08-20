name_of_the_student_array=[];

function submit(){
var  display_students_array=[];
for(var j=1; j<=4; j++){
    var name=document.getElementById("name"+j).value;
    console.log(name);
    name_of_the_student_array.push(name);
}
console.log(name_of_the_student_array);


var length_of_array=name_of_the_student_array.length;
console.log(length_of_array);
for(var k=0;k<length_of_array;k++){
display_students_array.push("<h4>Name - "+name_of_the_student_array[k]+"</h4>");
console.log(display_students_array);
}
console.log(display_students_array);
document.getElementById("display_names").innerHTML=display_students_array;
document.getElementById("sort_button").style.display="inline-block";

}
function sorting(){
    name_of_the_student_array.sort();
console.log(name_of_the_student_array);

    var  display_students_array_sorting=[];

    var length_of_array=name_of_the_student_array.length;
    console.log(length_of_array);
    for(var k=0;k<length_of_array;k++){
    display_students_array_sorting.push("<h4>Name - "+name_of_the_student_array[k]+"</h4>");
    console.log(display_students_array_sorting);
    }
    console.log(display_students_array_sorting);
    document.getElementById("display_name_with_sorting").innerHTML=display_students_array_sorting;

    
    }



