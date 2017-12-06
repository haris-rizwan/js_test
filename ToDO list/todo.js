// TO add new TO do item

function newToDO() {
var text =  $('#myInput').val();
var pirority = $("input[name=level]:checked").val();
console.log(pirority);
if (text=="") {
  alert('Please enter a To DO .... Thanks ');
// $('#myUl').append('<li class="alert alert-primary alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+text+'</li>');
} else if (pirority == 'high' {
  $('#myUl').append('<li class="alert alert-danger alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+text+'</li>');
} else if (pirority == 'medium') {
  $('#myUl').append('<li class="alert alert-warning alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+text+'</li>');
} else if (pirority == 'low') {
  $('#myUl').append('<li class="alert alert-primary alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+text+'</li>');
}
};



$('ul').on('click', 'li',function () {
  $(this).toggleClass('checked');
});
