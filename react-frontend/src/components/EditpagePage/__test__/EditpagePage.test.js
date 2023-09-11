import React from "react";
import { render, screen } from "@testing-library/react";

import EditpagePage from "../EditpagePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders editpage page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EditpagePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("editpage-datatable")).toBeInTheDocument();
    expect(screen.getByRole("editpage-add-button")).toBeInTheDocument();
});
