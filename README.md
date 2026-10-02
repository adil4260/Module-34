JavaScript Engine কীভাবে কাজ করে—একদম **শুরু থেকে সহজ বাংলায়** বুঝি।

ধরো তুমি লিখলে:

```js
const a = 10;
const b = 20;

console.log(a + b);
```

Browser সরাসরি এই JavaScript code বুঝে ফেলে না। **JavaScript Engine** code-টাকে বুঝে execute করে।

### 1. JavaScript Engine কী?

**JavaScript Engine = JavaScript code পড়া + বোঝা + চালানোর ব্যবস্থা।**

যেমন Chrome-এর JavaScript Engine হলো **V8**।

সহজভাবে:

```text
তোমার JS Code
      ↓
    Parser
      ↓
     AST
      ↓
  Interpreter
      ↓
   Execution
      ↓
     Output
```

### 2. প্রথমে কী হয়? → Parsing

Engine তোমার code পড়ে।

```js
const a = 10;
const b = 20;
console.log(a + b);
```

Engine দেখে:

> এখানে `a` নামে একটা variable আছে, তার value 10।

> এখানে `b` নামে একটা variable আছে, তার value 20।

> তারপর `console.log()` দিয়ে `a + b` print করতে হবে।

এই code-এর structure বোঝার জন্য engine **AST (Abstract Syntax Tree)** তৈরি করে।

---

### 3. তারপর Execution

Engine code execute করা শুরু করে।

```js
const a = 10;
```

মানে:

```text
a → 10
```

তারপর:

```js
const b = 20;
```

মানে:

```text
a → 10
b → 20
```

তারপর:

```js
console.log(a + b);
```

Engine হিসাব করে:

```text
10 + 20
   ↓
  30
```

তারপর console-এ:

```text
30
```

---

### 4. Interpreter কী?

JavaScript Engine-এর একটা গুরুত্বপূর্ণ অংশ হলো **Interpreter**।

Interpreter JavaScript code-কে বুঝে **execute করতে সাহায্য করে**।

সহজ উদাহরণ:

```js
let x = 5;
let y = 10;

console.log(x + y);
```

Interpreter একে একে কাজ করে:

```text
x = 5
↓
y = 10
↓
x + y
↓
15
↓
console.log(15)
```

---

### 5. কিন্তু V8 শুধু Interpreter দিয়ে কাজ করে না

এখানে একটা গুরুত্বপূর্ণ ব্যাপার আছে।

Modern JavaScript Engine, যেমন **Chrome-এর V8**, code দ্রুত চালানোর জন্য **JIT (Just-In-Time) Compilation** ব্যবহার করে।

সহজভাবে:

```text
JavaScript
    ↓
Parser
    ↓
AST
    ↓
Interpreter
    ↓
JIT Compiler
    ↓
Optimized Machine Code
    ↓
CPU
```

মানে কোনো code বারবার চললে engine বুঝতে পারে:

> "এই code অনেকবার চলছে। এটাকে আরও দ্রুত চালানো যায়।"

তখন engine সেটাকে optimize করে।

---

### 6. একটা সহজ উদাহরণ

```js
function add(a, b) {
    return a + b;
}

add(10, 20);
add(30, 40);
add(50, 60);
```

Engine লক্ষ্য করতে পারে `add()` function বারবার একই ধরনের কাজ করছে।

তখন JIT optimization-এর মাধ্যমে এটাকে দ্রুত execute করার চেষ্টা করতে পারে।

---

### সবচেয়ে সহজে মনে রাখো

**JavaScript Engine-এর কাজ:**

```text
1. Code নেয়
      ↓
2. Code বুঝে (Parsing)
      ↓
3. Structure বানায় (AST)
      ↓
4. Execute করে (Interpreter)
      ↓
5. দরকার হলে Optimize করে (JIT)
      ↓
6. CPU-তে কাজ করায়
```

**এক লাইনে:**

> **JavaScript Engine হলো এমন একটি program, যেটা JavaScript code-কে বুঝে machine-এর কাজ করার মতো form-এ নিয়ে গিয়ে execute করে।**

চাইলে এরপর আমি **Call Stack + Memory Heap + Event Loop + Web API**—এই চারটা মিলিয়ে JavaScript আসলে কীভাবে browser-এ কাজ করে, সেটা তোমার বর্তমান JS level অনুযায়ী বুঝিয়ে দিতে পারি।
