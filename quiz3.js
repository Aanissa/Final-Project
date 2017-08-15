var
  filters = {
    age: null,
    service: null,
    people: null,
    location: null
  };

function updateFilters() {
    $('.organization').hide().filter(function() {
      var
        self = $(this),
        resultsArray = [];
        result = false;

      Object.keys(filters).forEach(function (filter) {
        if (filters[filter]) {
          result = false;

          if(filters[filter] == 'Any') {
            result = true;
          }

          var dataArray = self.data(filter).split(",");
          if (dataArray.length>1) {
            for(var i=0; i<dataArray.length; i++) {
              if (filters[filter] ==  dataArray[i]){
                result = true;
              }
            }
          } else if (filters[filter] === self.data(filter)) {
            result = true;
          }
        }
        resultsArray.push(result);
        result = !resultsArray.includes(false);
      });

      return result;
    }).show();
  }

function changeFilter(filterName) {
  filters[filterName] = this.value;
  updateFilters();
}

$('#age-filter').on('change', function() {
  changeFilter.call(this, 'age');
});

$('#service-filter').on('change', function() {
  changeFilter.call(this, 'service');
});

$('#people-filter').on('change', function() {
  changeFilter.call(this, 'people');
});

$('#location-filter').on('change', function() {
  changeFilter.call(this, 'location');
});

/*
future use for a text input filter
$('#search').on('click', function() {
    $('.box').hide().filter(function() {
        return $(this).data('order-number') == $('#search-criteria').val().trim();
    }).show();
});*/
