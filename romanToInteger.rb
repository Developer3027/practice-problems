ROMAN_TO_INT =
{
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000
}

def roman_to_int(roman)
  numbers = roman.downcase.chars.map { |char| ROMAN_TO_INT[char.to_sym] }.reverse
  puts numbers
  numbers.inject([0, 1]) do |result_number, int|
    result, number = result_number
    int >= number ? [result + int, int] : [result - int, number]
  end.first
end

answer = roman_to_int('LXXVIV')
puts answer
