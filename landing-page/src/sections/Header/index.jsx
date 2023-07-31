import React, { useState, useEffect } from "react";
import { useTheme } from "../../ThemeContex";

import "design-system-core/dist/components/header";
import "design-system-core/dist/components/typography";
import "design-system-core/dist/components/radio-group";
import "design-system-core/dist/components/radio";
import "design-system-core/dist/components/switch";
import "design-system-core/dist/components/button";

export default function AppHeader() {
  const [mode, setMode] = useState("light");
  const [actualTheme, setActualTheme] = useState("tema-1");

  const { theme, handleTheme } = useTheme();

  useEffect(() => {
    document
      .getElementsByTagName("dsc-switch")[0]
      .addEventListener("dscChange", (e) =>
        setMode(!e.detail.checked ? "light" : "dark")
      );
    document
      .getElementsByTagName("dsc-radio-group")[0]
      .addEventListener("dscChange", (e) => setActualTheme(e.detail.value));
  }, []);

  useEffect(() => {
    handleTheme(actualTheme, theme.brand, mode);
  }, [mode, actualTheme]);

  return (
    <header className="header">
      <div className="grid container grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
        <div className="col-span-12">
          <dsc-header>
            <div className="header-content">
              <dsc-typography class="only-mobile" component="heading" size="xs">
                Trocar tema da Landing Page
              </dsc-typography>
              <dsc-radio-group>
                <dsc-radio label="Tema 01" value="tema-1" checked></dsc-radio>

                <dsc-radio label="Tema 02" value="tema-2"></dsc-radio>
              </dsc-radio-group>
              <dsc-typography class="only-mobile" component="heading" size="xs">
                Ativar Dark Mode
              </dsc-typography>
              <dsc-switch label="Dark"></dsc-switch>
            </div>
          </dsc-header>
        </div>
      </div>
    </header>
  );
}
