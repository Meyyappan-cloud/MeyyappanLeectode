class Solution {
  int firstUniqChar(String s) {
    Map<String, int> freq = {};

    // Step 1: Count frequency
    for (int i = 0; i < s.length; i++) {
      String ch = s[i];
      freq[ch] = (freq[ch] ?? 0) + 1;
    }

    for (int i = 0; i < s.length; i++) {
      if (freq[s[i]] == 1) {
        return i;
      }
    }

    return -1;
  }
}