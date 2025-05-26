const notes = [
  { visible: false, note: ['do', 'C'] },
  { visible: false, note: ['si', 'B'] },
  { visible: false, note: ['la', 'A'] },
  { visible: false, note: ['sol', 'G'] },
  { visible: false, note: ['fa', 'F'] },
  { visible: false, note: ['mi', 'E'] },
  { visible: false, note: ['re', 'D'] },
]

type Clef = 'bass' | 'treble'

export function createNotesArray(clef: Clef) {
  let index = 0
  let array = []

  if (clef === 'bass') index = 5

  if (clef === 'treble') index = 0

  while (array.length < 17) {
    if (index > 6) index = 0

    array.push(notes[index])

    index++
  }

  array = array.map((v, i) =>
    i === 4 || i === 6 || i === 8 || i === 10 || i === 12
      ? { ...v, visible: true }
      : v
  )

  return array
}
