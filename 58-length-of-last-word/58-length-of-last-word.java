class Solution {
    public int lengthOfLastWord(String s) {
        String[] words = s.split(" ");
        System.out.println(Arrays.toString(words));
        return words[words.length - 1].length();
    }
}