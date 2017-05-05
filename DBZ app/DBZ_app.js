console.log('DBZ')

$(document).ready(function(){


  done()
  createFighter()
})

function done(){
  $.ajax({
    method: "get",
    url: "http://localhost:3000/characters",
    success: function(data){
      data.forEach(function(char){
        $('.name').append(`<p>${char.name}</p><button type="button" class="btn" data-id="${char.id}" id="info">More Info</button>`)
      })
    }
  }).then(moreInfo)
}


function moreInfo(){
  $('.btn#info').on('click', function(){
    var id = $(this).data("id")
    $.ajax({
      method: "get",
      url:`http://localhost:3000/characters/${id}`,
      success: function(data){
        $('.name').html(`
          <h5>${data.name}</h5>
          <ul>
            <li>${data.race}</li>
            <li>${data.power_level}</li>
            <li>${data.DOB}</li>
            <li>${data.special_techniques}</li>
          </ul>
          `)
      }
    })
  })
}

function createFighter(){


  $('#addCharacter').on('submit', function(event){
    event.preventDefault()
    const $name = $('#name').val()
    const $race = $('#race').val()
    const $power_level = $('#power_level').val()
    const $DOB = $('#DOB').val()
    const $special_techniques = $('#special_techniques').val()
    // debugger
    $.ajax({
      method: 'post',
      url: "http://localhost:3000/characters",
      data: { character: {
        name: $name,
        race: $race,
        power_level: $power_level,
        DOB: $DOB,
        special_techniques: $special_techniques
        }
      },
      success: function(data){
        $('.name').append(`<p>${data.name}</p><button type="button" class="btn" data-id="${data.id}" id="info">More Info</button>`)
      }
    })
  })

}

//
// .post(url)
// .then()
//
//
// .get(url)
// .then(function(){
//   $('#name').
// }).then(function(){
//   $('#button').on('click', function(){
//
//   })
// })
