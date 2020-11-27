const years = [ 1763, 1972, 2020, 1987, 1350, 1127]

function getYears(years) 
{
  return years.filter(year => year > 1972)
}

console.log(getYears(years));
