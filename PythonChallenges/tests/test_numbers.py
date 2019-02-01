from algorithms.numbers import (
  fizz_buzz,
  random_number,
  raise_to_power,
  raise_to_power2,
  swap,
  is_prime,
  next_highest_lowest_binary,
  binary_reverse,
  contains_only_numbers,
  add_numbers_inside_string
)

import unittest
  

#
# Challenge 1 -- FizzBuzz
#
class TestNumbers(unittest.TestCase):
  def test_fizz_buzz(self):
    self.assertEqual(fizz_buzz(6), "fizz")
    self.assertEqual(fizz_buzz(10), "buzz")
    self.assertEqual(fizz_buzz(15), "fizzbuzz")
    self.assertEqual(fizz_buzz(2), "2")

  def test_random_number(self):
    for i in range(0, 100):
      result = random_number(10,15)
      self.assertGreaterEqual(result, 10)
      self.assertLessEqual(result, 15)

  def test_raise_to_power(self):
    self.assertEqual(raise_to_power(0,3), 0)
    self.assertEqual(raise_to_power(5,2), 25)
    self.assertEqual(raise_to_power(5,0), 1)
    self.assertEqual(raise_to_power(5,3), 125)
    self.assertEqual(raise_to_power2(5, -2), 0.04)

    self.assertEqual(raise_to_power(0,3), 0)
    self.assertEqual(raise_to_power(5,2), 25)
    self.assertEqual(raise_to_power(5,0), 1)
    self.assertEqual(raise_to_power(5,3), 125)
    self.assertEqual(raise_to_power2(5, -2), 0.04)

  def test_swap(self):
    dictionary = { 'a': 10, 'b': 15 }
    swap(dictionary)
    self.assertEqual(dictionary['a'], 15)
    self.assertEqual(dictionary['b'], 10)

  def test_is_prime(self):
    self.assertTrue(is_prime(11))
    self.assertTrue(is_prime(13))
    self.assertFalse(is_prime(4))
    self.assertFalse(is_prime(9))
    self.assertTrue(is_prime(16777259))

  def test_next_highest_lowest_binary(self):
    self.assertEqual(next_highest_lowest_binary(12)['next_highest'], 17)
    self.assertEqual(next_highest_lowest_binary(12)['next_lowest'], 10)
    self.assertEqual(next_highest_lowest_binary(28)['next_highest'], 35)
    self.assertEqual(next_highest_lowest_binary(28)['next_lowest'], 26)

  def test_binary_reverse(self):
    self.assertEqual(binary_reverse(32), 4)
    self.assertEqual(binary_reverse(41), 148)
    self.assertEqual(binary_reverse(4), 32)
    self.assertEqual(binary_reverse(148), 41)

  def test_contains_only_numbers(self):
    self.assertTrue(contains_only_numbers("0101010101"))
    self.assertTrue(contains_only_numbers("123456789"))
    self.assertTrue(contains_only_numbers("9223372036854775808"))
    self.assertFalse(contains_only_numbers("1.01"))
    self.assertFalse(contains_only_numbers("1237987abc12398"))

  def test_add_numbers_inside_string(self):
    self.assertEqual(add_numbers_inside_string('a1b2c3'), 6)
    self.assertEqual(add_numbers_inside_string('a10b20c30'), 60)
    self.assertEqual(add_numbers_inside_string('h8ers'), 8)