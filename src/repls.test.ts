import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

describe.each([
    {
        input: "  hello  world  ",
        expected: ["hello", "world"],
    },
    {
        input: "Was ist hier los",
        expected: ["was", "ist", "hier", "los"],
    },
    {
        input: " Das kann ja wohl nicht wahr sein... ",
        expected: ["das", "kann", "ja", "wohl", "nicht", "wahr", "sein..."],
    },
    {
        input: "EVERYTHING IS UPPER CASE",
        expected: ["everything", "is", "upper", "case"],
    },
    {
        input: "singleWord",
        expected: ["singleword"],
    },
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input);

        // The expect and toHaveLength functions from vitest will fail the test if the condition is not met.
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});