$(document).ready(function(){
$('#bRemove').click(function() {
    $('#form').css('visibility','visible');
	$('#tblList').css('visibility','hidden');
	$('#tblList1').css('visibility','hidden');
	$('#bAdd').css('visibility','visible');
	$('#bUpdate').css('visibility','visible');
		$('#bAdd3').css('visibility','hidden');
	$('#bUpdate3').css('visibility','hidden');
	$('#title').css('visibility','visible');
		$('#tblList2').css('visibility','hidden');
	$('#tblList3').css('visibility','hidden');
	$('#tblList4').css('visibility','hidden');
	$('#total').css('visibility','hidden');
	
})
function edit(){
$('#edit').click(function() {
    $('#form').css('visibility','visible');
	$('#tblList').css('visibility','hidden');
	$('#edit').css('visibility','hidden');
	$('#bAdd3').css('visibility','visible');
	$('#bUpdate3').css('visibility','visible');
	$('#title').css('visibility','visible');
		$('#bAdd').css('visibility','hidden');
	$('#bUpdate').css('visibility','hidden');
		$('#tblList2').css('visibility','hidden');
	$('#tblList3').css('visibility','hidden');
	$('#tblList4').css('visibility','hidden');
})
}
$('#bUpdate').click(function() {
   List();
	$('#tblList').css('visibility','visible');
	$('#form').css('visibility','hidden');
	$('#title').css('visibility','hidden');
	$('#bAdd').css('visibility','hidden');
	$('#bUpdate').css('visibility','hidden');
		$('#tblList2').css('visibility','hidden');
	$('#tblList3').css('visibility','hidden');
	$('#tblList4').css('visibility','hidden');
	
})
$('#bUpdate3').click(function() {
   List();
	$('#tblList').css('visibility','visible');
	$('#form').css('visibility','hidden');
	$('#title').css('visibility','hidden');
	$('#edit').css('visibility','visible');
	$('#bAdd3').css('visibility','hidden');
	$('#bUpdate3').css('visibility','hidden');
		$('#tblList2').css('visibility','hidden');
	$('#tblList3').css('visibility','hidden');
	$('#tblList4').css('visibility','hidden');
})
$('#bAdd').click(function() {
   List();
	$('#tblList').css('visibility','visible');
	$('#form').css('visibility','hidden');
	$('#title').css('visibility','hidden');
	$('#bAdd').css('visibility','hidden');
	$('#bUpdate').css('visibility','hidden');
	$('#bAdd3').css('visibility','hidden');
	$('#bUpdate3').css('visibility','hidden');
	$('#edit').css('visibility','visible');
		$('#tblList2').css('visibility','hidden');
	$('#tblList3').css('visibility','hidden');
	$('#tblList4').css('visibility','hidden');
})
$('#bAdd3').click(function() {
   List();
	$('#tblList').css('visibility','visible');
	$('#form').css('visibility','hidden');
	$('#title').css('visibility','hidden');
	$('#bAdd').css('visibility','hidden');
	$('#bUpdate').css('visibility','hidden');
	$('#edit').css('visibility','visible');
	$('#bAdd3').css('visibility','hidden');
	$('#bUpdate3').css('visibility','hidden');
		$('#tblList2').css('visibility','hidden');
	$('#tblList3').css('visibility','hidden');
	$('#tblList4').css('visibility','hidden');
})
$('#total').click(function() {
   List();
	$('#tblList').css('visibility','visible');
	$('#form').css('visibility','hidden');
	$('#title').css('visibility','hidden');
	$('#bAdd').css('visibility','hidden');
	$('#bUpdate').css('visibility','hidden');
	$('#total').css('visibility','hidden');
	$('#tblList1').css('visibility','hidden');
		$('#tblList2').css('visibility','hidden');
	$('#tblList3').css('visibility','hidden');
	$('#tblList4').css('visibility','hidden');
})
$('#fil').click(function() {
   ListbyDate();
	$('#tblList').css('visibility','hidden');
	$('#form').css('visibility','hidden');
	$('#title').css('visibility','hidden');
	$('#bAdd').css('visibility','hidden');
	$('#bUpdate').css('visibility','hidden');
	$('#total').css('visibility','hidden');
	$('#tblList1').css('visibility','visible');
	$('#tblList2').css('visibility','hidden');
	$('#tblList3').css('visibility','hidden');
	$('#tblList4').css('visibility','hidden');
})
$('#year').change(function() {
   ListbyYear();
	$('#tblList').css('visibility','hidden');
	$('#form').css('visibility','hidden');
	$('#title').css('visibility','hidden');
	$('#bAdd').css('visibility','hidden');
	$('#bUpdate').css('visibility','hidden');
	$('#total').css('visibility','hidden');
		$('#tblList1').css('visibility','hidden');
	$('#tblList3').css('visibility','hidden');
	$('#tblList4').css('visibility','hidden');
	$('#tblList2').css('visibility','visible');
})

$('#day1').change(function() {
   ListbyDay();
	$('#tblList').css('visibility','hidden');
	$('#form').css('visibility','hidden');
	$('#title').css('visibility','hidden');
	$('#bAdd').css('visibility','hidden');
	$('#bUpdate').css('visibility','hidden');
	$('#total').css('visibility','hidden');
	$('#tblList1').css('visibility','hidden');
	$('#tblList2').css('visibility','hidden');
	$('#tblList4').css('visibility','hidden');
	$('#tblList3').css('visibility','visible');
})

$('#month').change(function() {
   ListbyMonth();
	$('#tblList').css('visibility','hidden');
	$('#form').css('visibility','hidden');
	$('#title').css('visibility','hidden');
	$('#bAdd').css('visibility','hidden');
	$('#bUpdate').css('visibility','hidden');
	$('#total').css('visibility','hidden');
	$('#tblList1').css('visibility','hidden');
	$('#tblList2').css('visibility','hidden');
	$('#tblList3').css('visibility','hidden');
	$('#tblList4').css('visibility','visible');
})

$('#fil1').click(function() {
   List();
	$('#tblList').css('visibility','visible');
	$('#form').css('visibility','hidden');
	$('#title').css('visibility','hidden');
	$('#bAdd').css('visibility','hidden');
	$('#bUpdate').css('visibility','hidden');
	$('#total').css('visibility','hidden');
		$('#tblList1').css('visibility','hidden');
	$('#tblList2').css('visibility','hidden');
	$('#tblList3').css('visibility','hidden');
	$('#tblList4').css('visibility','hidden');
})
$('#bRemove2').click(function() {
   
	$('#tblList').css('visibility','hidden');
	$('#tblList1').css('visibility','hidden');
	$('#total').css('visibility','visible');
	$('#form').css('visibility','hidden');
	$('#title').css('visibility','hidden');
	$('#bAdd').css('visibility','hidden');
	$('#bUpdate').css('visibility','hidden');
		$('#tblList1').css('visibility','hidden');
	$('#tblList2').css('visibility','hidden');
	$('#tblList3').css('visibility','hidden');
	$('#tblList4').css('visibility','hidden');
})
});