import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { RouterLinkStub } from "@vue/test-utils";

import MainNav from "@/components/Navigation/MainNav.vue";
import { describe, expect } from "vitest";

describe("MainNav", () => {
  const renderMainNav = () => {
    const $route = {
      name: "Home",
    };

    render(MainNav, {
      global: {
        mocks: {
          $route,
        },
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub,
        },
      },
    });
  };

  it("displays company name", () => {
    renderMainNav();
    const companyName = screen.getByText("Bobo Careers");
    expect(companyName).toBeInTheDocument();
  });

  it("displays menu items for naviagation", () => {
    renderMainNav();
    const naviagationMenuItems = screen.getAllByRole("listitem");
    const naviagationMenuTexts = naviagationMenuItems.map((item) => item.textContent);
    expect(naviagationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Bobo Corp",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });

  describe("when the user logs in", () => {
    it("displays user profile picture", async () => {
      renderMainNav();

      let profileImage = screen.queryByRole("img", {
        name: /User profile image/i, //case insensitive (U = u)
      });
      expect(profileImage).not.toBeInTheDocument; // to find an element which is to avaliable on the DOM (atm)

      const loginButton = screen.getByRole("button", {
        name: /Sign in/i,
      });
      await userEvent.click(loginButton);

      profileImage = screen.getByRole("img", {
        name: /User profile image/i, //case insensitive (U = u)
      });
      expect(profileImage).toBeInTheDocument; // now it should be in the DOM
    });
  });
});
