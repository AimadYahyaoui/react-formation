import { describe } from "vitest";
import { vi } from "vitest";
import { test } from "vitest";
import { expect } from "vitest";
import { beforeEach, type Mock } from "vitest";
import httpClient from "../../lib/http-client";
import { getBeers } from "../beers.service";

vi.mock("../../lib/http-client");
const mockedHttpClient = vi.mocked(httpClient);

describe("http-client", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("fetches data", async () => {
    (mockedHttpClient.get as Mock).mockResolvedValue({
      data: [
        {
          name: "foo",
          id: 1,
        },
      ],
    });
    const data = await getBeers();

    expect(data).toEqual([
      {
        name: "foo",
        id: 1,
      },
    ]);
  });

  test("throw stp", () => {
    const test = () => {
      throw new Error("stp");
    };

    expect(() => test()).toThrowError("stp");
  });
});
