import { createSignal, type Component } from "solid-js";
import "./index.css";
import "flowbite";

const App: Component = () => {
  const [firstTodo, setFirstTodo] = createSignal("Update meeting invite");
  const [secondTodo, setSecondTodo] = createSignal(
    "Scope pattern matcher changes",
  );
  const [thirdTodo, setThirdTodo] = createSignal("Deploy new version");

  return (
    <div class="h-screen">
      <div class="flex h-full">
        <div class="text-left m-5 p-5 bg-darkgray rounded-xl shadow-xl min-w-[200px] h-fit">
          <div class="font-black text-xxl rounded-xl w-fit text-offwhite">
            amble
            <div class="w-100 h-[5px] bg-accent rounded-xl"></div>
          </div>
          <div class="rounded-xl shadow mt-4 font-bold hover:underline text-base cursor-pointer">
            Learn
          </div>
        </div>

        <div class="h-100 bg-darkgray rounded-xl w-full m-5 ml-2 overflow-auto p-10 shadow">
          <div class="w-fit">
            <div class="font-black text-aqua" style="font-size: 3rem;">
              🎒 : <span class="text-offwhite italic">amble</span>
            </div>
            <div class="font-bold italic" style="font-size: 2rem;">
              truly programmable notes
            </div>
          </div>

          <div class="text-xl mt-10 font-black">
            <span class="text-primary">⦿</span> Robust Knowledge Management
          </div>
          <div class="text-lg ml-9 mt-5 max-w-[60%]">
            Amble combines ideas from knowledge management systems like Notion,
            Obsidian, and Roam Research with a fast pattern matching/querying
            system.
            <br />
            <br />
            Amble is not an electron app, not a web app, and not even a GUI
            application.
            <br />
            <br />
            Instead, Amble is provided as a cross-platform shared library
            written in Rust for doing pattern matching, modifying, and querying
            the contents of your notes.
            <br />
            <br />
            The core of Amble is designed to be extremely simple to install and
            interface with, allowing users to build their own wrappers around
            the core library.
            <br />
            <br />
            We aim to provide a few official wrappers for Amble, including a
            Neovim interface, a CLI interface, and a web interface.
          </div>

          <div class="text-xl mt-10 font-black">
            <span class="text-primary">⦿</span> Highly Modular
          </div>
          <div class="text-lg ml-9 mt-5 max-w-[60%]">
            The magic of the querying and pattern matching facilities of Amble
            happens on an intermediate representation of your notes called{" "}
            <span class="text-accent font-black">AIR</span> (Amble Intermediate
            Representation).
            <br />
            <br />
            While Amble aims to offer first class support for an Org-like syntax
            for your notes, the core of Amble is syntax independent. This means
            Amble can integrate information from JSON, Markdown, XML, even the
            comments in your codebase, provided a parser is provided to convert
            that information into{" "}
            <span class="text-accent font-black">AIR</span>.
          </div>

          <div class="text-xl mt-10 font-black">
            <span class="text-primary">⦿</span> Not Just Notes
          </div>
          <div class="text-lg ml-9 mt-5 max-w-[60%]">
            Amble stores your notes in what we call a{" "}
            <span class="text-accent font-black">backpack</span>.
            <br />
            <br />
            The text content of your notes is stored inside a SQLite database.
            This SQLIte database exists in an archived directory alongside files
            that you want your notes to link to. These might include images,
            PDFs, videos, etc.
            <br />
            <br />
            Amble aims to provide a rich link system in all of its official
            client side wrappers. Allowing you to quickly jump between your
            notes, your PDFs, your books, and your codebases.
          </div>

          <div class="text-xl mt-10 font-black">
            <span class="text-primary">⦿</span> Syntax Crash Course
          </div>

          <div class="font-mono mt-4 bg-background p-5 rounded-xl whitespace-nowrap overflow-x-auto">
            <div class="text-lightgray">
              // Take notes in plain text in an
              <br />
              // org mode inspired syntax
            </div>
            <br />

            <div>
              <span class="text-secondary font-black">⦿</span>{" "}
              <span class="italic font-bold text-accent">TODO</span>{" "}
              {firstTodo()}
            </div>
            <div class="ml-6">
              :<span class="italic text-secondary">due</span>: 10/25/24
            </div>
            <div class="ml-6">
              :<span class="italic text-secondary">project</span>: Amble
            </div>
            <br />
            <div class="ml-6">
              <span class="underline text-primary font-bold">Link</span> to
              invite
            </div>

            <br />

            <div>
              <span class="text-secondary font-black">⦿</span> Client meeting
            </div>
            <div class="ml-6">
              :<span class="italic text-secondary">date</span>: 10/10/24
            </div>
            <div class="ml-6">
              <br />
              pattern matcher is awesome
              <br />
              <br />
              more work is needed in fleshing out lisp integration
              <br />
              <br />
              it's awesome that you can use amble
              <br />
              natively in neovim
            </div>
            <br />
            <div class="ml-7">
              <div>
                <span class="text-secondary font-black">✹</span>{" "}
                <span class="italic font-bold text-accent">TODO</span>{" "}
                {secondTodo()}
              </div>
              <div class="ml-6">
                :<span class="italic text-secondary">project</span>: Amble
              </div>
            </div>
            <br />
            <div class="ml-7">
              <div>
                <span class="text-secondary font-black">✹</span>{" "}
                <span class="italic font-bold text-accent">TODO</span>{" "}
                {thirdTodo()}
              </div>
              <div class="ml-6">
                :<span class="italic text-secondary">project</span>: Amble
              </div>
            </div>

            <br />

            <div class="text-lightgray">
              // Leverage powerful pattern matching using{" "}
              <span class="font-bold text-accent italic">FOLDS</span>
              <br />
              // directly in your notes to collect and organize
              <br />
              // everything you need to remember
              <br />
              <br />
              // Let's organize all our{" "}
              <span class="font-bold text-accent italic">TODO</span> items for
              <br />
              // the Amble project into one place
            </div>

            <br />

            <div>
              <span class="text-secondary font-black">⦿</span>{" "}
              <span class="italic font-bold text-accent">FOLD</span> Amble Todos
            </div>
            <br />
            <div class="text-lightgray ml-7">
              // In the <span class="font-bold text-accent italic">FROM</span>{" "}
              clause we define what we want to find in our notes.
              <br />
              // "" denotes a literal, the item in our notes must
              <br />
              // have this text at this position to satisfy the pattern.
              <br />
              <br />
              // No "" means we capture whatever text
              <br />
              // we find at this position into that variable name
            </div>
            <br />
            <div class="ml-7">
              <div>
                <span class="text-secondary font-black">✹</span>{" "}
                <span class="italic font-bold text-accent">FROM</span>
              </div>
              <div class="ml-7">
                <div>
                  <span class="text-secondary font-black">⦾</span> "TODO"{" "}
                  <span class="italic text-accent">todo-title</span>
                </div>
                <div class="ml-7">
                  :<span class="italic text-secondary">project</span>: "Amble"
                </div>
              </div>
            </div>
            <br />
            <div class="text-lightgray ml-7">
              // In the <span class="font-bold text-accent italic">INTO</span>{" "}
              clause we define how to generate new
              <br />
              // text for each node in our notes that matched the pattern.
              <br />
              <br />
              // "" means we always write this text at this position
              <br />
              // no "" means we write whatever was captured into that variable
              name.
            </div>
            <br />
            <div class="ml-7">
              <div>
                <span class="text-secondary font-black">✹</span>{" "}
                <span class="italic font-bold text-accent">INTO</span>
              </div>
              <div class="ml-7">
                <div>
                  <span class="text-secondary font-black">⦾</span> "TODO"{" "}
                  <span class="italic text-accent">todo-title</span>
                </div>
              </div>
            </div>

            <br />

            <div class="text-lightgray ml-7">
              // Editing an item generated from a{" "}
              <span class="font-bold text-accent italic">FOLD</span>
              <br />
              // also modifies that item's source.
              <br />
              <br />
              // Give it a try by editing one of the pieces of text below
              <br />
              // and scrolling up to see the change
            </div>

            <br />

            <div class="ml-7">
              <div>
                <span class="text-secondary font-black">✹</span>{" "}
                <span class="italic font-bold text-accent">TODO</span>
                <input
                  class="bg-background ml-3 outline-none min-w-[500px]"
                  value={firstTodo()}
                  onInput={(e) => setFirstTodo(e.target.value)}
                />
              </div>
            </div>
            <div class="ml-7">
              <div>
                <span class="text-secondary font-black">✹</span>{" "}
                <span class="italic font-bold text-accent">TODO</span>
                <input
                  class="bg-background ml-3 outline-none min-w-[500px]"
                  value={secondTodo()}
                  onInput={(e) => setSecondTodo(e.target.value)}
                />
              </div>
            </div>
            <div class="ml-7">
              <div>
                <span class="text-secondary font-black">✹</span>{" "}
                <span class="italic font-bold text-accent">TODO</span>
                <input
                  class="bg-background ml-3 outline-none min-w-[500px]"
                  value={thirdTodo()}
                  onInput={(e) => setThirdTodo(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
