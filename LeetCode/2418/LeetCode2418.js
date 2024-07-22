// 2418. Sort the People
// time complexity 0(log n)
// space complexity 0(n)
let names = ['Mary', 'John', 'Emma']
let heights = [180, 165, 170]

function sortPeople (names, heights) {
  let people = names.map((name, index) => {
    return { name: name, height: heights[index] }
  })

  people.sort((a, b) => b.height - a.height)

  return people.map(person => person.name)
}
console.log(sortPeople(names, heights))
