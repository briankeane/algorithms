from algorithms.strings import (
  hello_world,
  is_unique,
  is_palindrome,
  contains_same_strings,
  fuzzy_contains,
  character_count,
  remove_duplicates,
  condense_whitespace,
  is_rotated,
  is_rotated_2,
  is_pangram,
  vowel_consonant_count,
  distance_less_than_3,
  longest_prefix,
  run_length_encoding,
  get_all_permutations,
  reverse_words
)

import unittest
  
class TestHelloWorld(unittest.TestCase):
  """[summary]
  Hellos the world

  """
  def test_hello_world(self):
    hello_world()

#
# Challenge 1 -- Unique
#
class TestStrings(unittest.TestCase):
  def test_is_unique(self):
    self.assertEqual(is_unique("No duplicates"), True)
    self.assertEqual(is_unique("abcdefghijklmnopqrstuvwxyz"), True)
    self.assertEqual(is_unique("AaBbCc"), True)
    self.assertEqual(is_unique("Hello, world"), False)

  def test_is_palindrome(self):
    self.assertTrue(is_palindrome("rotator"))
    self.assertTrue(is_palindrome("Rats live on no evil star"))
    self.assertFalse(is_palindrome("Never odd or even"))
    self.assertFalse(is_palindrome("Hello, wrold"))

  def test_contains_same_strings(self):
    self.assertTrue(contains_same_strings("abca", "abca"))
    self.assertTrue(contains_same_strings("abc", "cba"))
    self.assertTrue(contains_same_strings("a1 b2",  "b1 a2"))
    self.assertFalse(contains_same_strings("abc", "abca"))
    self.assertFalse(contains_same_strings("abc", "Abc"))
    self.assertFalse(contains_same_strings("abc", "cbAa"))

  def test_fuzzy_contains(self):
    self.assertTrue(fuzzy_contains("Hello, world", "Hello"))
    self.assertTrue(fuzzy_contains("Hello, world", "WORLD"))
    self.assertFalse(fuzzy_contains("Hello, world", "Goodbye"))

  def test_count_the_characters(self):
    self.assertEqual(character_count("The rain in Span", "a"), 2)
    self.assertEqual(character_count("Mississippi", "i"), 4)
    self.assertEqual(character_count("Hacking with Swift", "i"), 3)

  def test_remove_duplicates(self):
    self.assertEqual(remove_duplicates("wombat"),"wombat")
    self.assertEqual(remove_duplicates("hello"),"helo")
    self.assertEqual(remove_duplicates("Mississippi"),"Misp")

  def test_condense_whitespace(self):
    self.assertEqual(condense_whitespace("a    b    c"), "a b c")
    self.assertEqual(condense_whitespace("         a"), " a")
    self.assertEqual(condense_whitespace("abc"), "abc")

  def test_is_rotated(self):
    self.assertTrue(is_rotated("abcde", "eabcd"));
    self.assertTrue(is_rotated("abcde", "cdeab"));
    self.assertFalse(is_rotated("abcde", "abced"));
    self.assertFalse(is_rotated("abc", "a"));

    self.assertTrue(is_rotated_2("abcde", "eabcd"));
    self.assertTrue(is_rotated_2("abcde", "cdeab"));
    self.assertFalse(is_rotated_2("abcde", "abced"));
    self.assertFalse(is_rotated_2("abc", "a"));

  def test_is_pangram(self):
    self.assertTrue(is_pangram("The quick brown fox jumps over the lazy dog"))
    self.assertFalse(is_pangram("The quick brown fox jumps over he lazy dog"))
    self.assertFalse(is_pangram("The quick brown fox jumped over the lazy dog"))

  def test_consonant_and_vowel_count(self):
    self.assertEqual(vowel_consonant_count("Swift Coding Challenges"), (6,15))
    self.assertEqual(vowel_consonant_count("Mississippi"), (4,7))

  def test_distance_less_than_3(self):
    self.assertTrue(distance_less_than_3("Clamp", "Cramp"))
    self.assertTrue(distance_less_than_3("Clamp", "Crams"))
    self.assertFalse(distance_less_than_3("Clamp", "Grans"))
    self.assertFalse(distance_less_than_3("Clamp", "Clam"))

  def test_run_length_encoding(self):
    self.assertEqual(run_length_encoding("aabbcc"), "a2b2c2")
    self.assertEqual(run_length_encoding("aaabaaabaaa"), "a3b1a3b1a3")
    self.assertEqual(run_length_encoding("aaAAaa"), "a2A2a2")

  def test_get_all_permutations(self):
    self.assertCountEqual(get_all_permutations("a"), ['a'])
    self.assertCountEqual(get_all_permutations("ab"), ['ab','ba'])
    self.assertCountEqual(get_all_permutations("abc"), ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
    self.assertEqual(len(get_all_permutations("wombat")), 720)

  def test_reverse_words(self):
    self.assertEqual(reverse_words('Swift Coding Challenges'), 'tfiwS gnidoC segnellahC')
    self.assertEqual(reverse_words('The quick brown fox'), 'ehT kciuq nworb xof')

if __name__ == "__main__":
    unittest.main()