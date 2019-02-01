import math

def hello_world():
  print ("Hello World!")

def is_unique(str):
  char_map = {}
  for char in str:
    if (char in char_map):
      return False
    char_map[char] = True
  return True

def is_palindrome(str):
  lower_str = str.lower()
  for i in range(0, math.ceil(len(lower_str) - 1/2)):
    if lower_str[i] != lower_str[len(lower_str) - 1 - i]:
      return False
  return True

def contains_same_strings(str1, str2):
  if len(str1) != len(str2):
    return False

  str1_map = create_char_map(str1)
  str2_map = create_char_map(str2)

  for char in str1_map:
    if not char in str2_map:
      return False

    if str1_map[char] != str2_map[char]:
      return False
  return True



def create_char_map(str):
  char_map = {}
  for char in str:
    if not char in char_map:
      char_map[char] = 0
    char_map[char]+= 1
  return char_map

def fuzzy_contains(str1, str2):
  return str2.lower() in str1.lower()

def character_count(str, char):
  count = 0
  for check_char in str:
    if check_char == char:
      count += 1
  return count

def remove_duplicates(str):
  already_added = {}
  new_str = ""
  for char in str:
    if not char in already_added:
      new_str += char
    already_added[char] = True
  return new_str

def condense_whitespace(str):
  previous_char_was_whitespace = False
  new_str = ""
  for char in str:
    if not (previous_char_was_whitespace and char == " "):
      new_str += char
    previous_char_was_whitespace = (char == " ")
  return new_str


def is_rotated(str1, str2):
  if len(str1) != len(str2):
    return False

  doubled_str = str1 + str1
  if str2 in doubled_str:
    return True
  return False

def is_rotated_2(str1, str2):
  #
  # Helper Functions
  #
  def is_rotated_from_index(offset, str1, str2):
    for i in range(0, len(str1) - 1):
      if (str1[i] != str2[adjusted_index(offset + i, len(str1) - 1)]):
        return False
    return True

  def adjusted_index(index, max):
    if index > max:
      return index - max - 1
    else:
      return index


  if len(str1) != len(str2):
    return False
  for i in range(0, len(str1) - 1):
    if is_rotated_from_index(i, str1, str2):
      return True
  return False

def is_pangram(str):
  #
  # Lower case letters ascii codes: 97 - 122
  #
  char_map = {}
  for char in str:
    if (ord(char) >= 97) and (ord(char) <= 122):
      char_map[char] = True
  return len(char_map.keys()) == 26

def vowel_consonant_count(str):
  vowels_set = {'a','e','i','o','u'}
  vowels = 0
  consonants = 0

  for char in str.lower():
    is_a_letter = (ord(char) >= 97) and (ord(char) <= 122)
    if is_a_letter:
      if char in vowels_set:
        vowels += 1
      else:
        consonants += 1
  return (vowels, consonants)

def distance_less_than_3(str1, str2):
  if len(str1) != len(str2):
    return False

  distance_count = 0
  for i in range(0, len(str1)):
    if str1[i] != str2[i]:
      distance_count += 1
    if distance_count > 3:
      return False
  return True

def longest_prefix(str):
  def all_have_prefix(prefix, words):
    for word in words:
      if not words.startswith(prefix):
        return False
    return True

  words = str.split(' ')
  if (len(words) == 0):
    return ''

  current_prefix = ''
  best_prefix = ''

  for letter in words[0]:
    current_prefix = current_prefix + letter
    if not all_have_prefix(current_prefix, words):
      return best_prefix
    best_prefix = current_prefix
  return best_prefix

def run_length_encoding(str):
  if len(str) == 0:
    return ""
  
  finalString = ""
  char_count = 1
  for i in range(0, len(str)):
    #
    # IF at the end, add final count to string and continue
    #
    if i == len(str) - 1:
      finalString += "{}{}".format(str[i], char_count)
      break
    
    next_char = str[i+1]

    if str[i] == next_char:
      char_count += 1
    else:
      finalString += "{}{}".format(str[i], char_count)
      char_count = 1

  return finalString

def get_all_permutations(str, permutationBeingBuilt=""):
  if len(str) == 0:
    return [permutationBeingBuilt]

  permutations = []
  for i in range(0, len(str)):
    left_letters = str[:i]
    right_letters = str[i+1:]
    permutations = permutations + get_all_permutations(left_letters + right_letters, permutationBeingBuilt + str[i])
  return permutations

def reverse_words(str):
  words = str.split(' ')
  return ' '.join(map(lambda word: word[::-1], words))

