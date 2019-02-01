import random
import math
import re

def fizz_buzz(number):
  divisible_by_3 = (number % 3 == 0)
  divisible_by_5 = (number % 5 == 0)

  if divisible_by_5 and divisible_by_3:
    return "fizzbuzz"
  elif divisible_by_3:
    return "fizz"
  elif divisible_by_5:
    return "buzz"
  else:
    return "{}".format(number)

def random_number(min, max):
  return random.randint(min, max)

def raise_to_power(num, power):
  return num ** power

def raise_to_power2(num, power):
  if (power == 0):
    return 1
  total = num
  for i in range(1, abs(power)):
    total = total * num
  if power > 0:
    return total
  else:
    return 1/total

def swap(dictionary):
  dictionary['a'] = dictionary['a'] + dictionary['b']
  dictionary['b'] = dictionary['a'] - dictionary['b']
  dictionary['a'] = dictionary['a'] - dictionary['b']

def is_prime(num):
  if num == 1:
    return True
  
  upperLimit = math.ceil(math.sqrt(num))
  for i in range(2, upperLimit + 1):
    if (num % i == 0):
      return False

  return True

def next_highest_lowest_binary(num):
  def ones_count(num):
    return len(''.join(filter(lambda letter : letter == '1', format(num, 'b'))))

  def next_highest(num):
    original_ones_count = ones_count(num)
    current_search_number = num + 1
    while(True):
      if ones_count(current_search_number) == original_ones_count:
        return current_search_number
      current_search_number += 1

  def next_lowest(num):
    original_ones_count = ones_count(num)
    current_search_number = num - 1
    while(True):
      if ones_count(current_search_number) == original_ones_count:
        return current_search_number
      current_search_number -= 1


  return { 'next_highest': next_highest(num),
           'next_lowest': next_lowest(num) }

def binary_reverse(num):
  binary_string = format(num, 'b').zfill(8)
  reversed_binary_string = binary_string[::-1]
  return int(reversed_binary_string, 2)

def contains_only_numbers(text):
  for letter in text:
    try: 
      int(letter)
    except:
      return False
  return True

def add_numbers_inside_string(text):
  numbers = re.sub(r"[^0-9 ]", '.', text).split('.')
  numbers_strings_list = list(filter(lambda num : len(num) > 0, numbers))
  numbers_list = map(lambda x : int(x), numbers_strings_list)
  return sum(numbers_list)

