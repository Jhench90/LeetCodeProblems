class Solution {
    public boolean isValid(String s) {
        HashMap<Character, Character> map = new HashMap<Character, Character>();
        map.put('}', '{');
        map.put(')', '(');
        map.put(']', '[');
        
        Stack<Character> stack = new Stack<Character>();
        
        for (int i = 0; i < s.length(); i++) {
            if (map.containsKey(s.charAt(i))) {
                //remove last element of stack
                char lastElement = stack.isEmpty() ? '#' : stack.pop(); 
                //retrieve pair from map
                char pair = map.get(s.charAt(i));
                //if last element does not equal pair from map
                if (pair != lastElement) {
                    return false;
                }
                //return false
            } else {
                stack.push(s.charAt(i));
            }
        }
        return stack.isEmpty();
    }
}