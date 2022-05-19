import { createSignal, createEffect } from "solid-js"
import styles from "./App.module.css"

function App() {
  const [amount, setAmount] = createSignal(0)
  const [hourlyRate, setHourlyRate] = createSignal(100)
  const [desiredHours, setDesiredHours] = createSignal(10)
  const [desiredWeeks, setDesiredWeeks] = createSignal(2)

  createEffect(() => {
    setAmount(desiredWeeks() * desiredHours() * hourlyRate())
  })

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1>qolpe </h1>
        <p className={styles.small}>
          (kwal·pee)
          <br />
          Quality of Life Project Estimator
        </p>
        <p>Because most the time you matter more than your projects.</p>
        <form>
          <label for="hourlyRate">
            <div>
              <h2>How much do you want to make an hour?</h2>
              <p>
                Don't sell yourself short,{" "}
                <a href="https://www.npr.org/2022/04/12/1092414592/the-rate-of-inflation-made-its-sharpest-spike-since-1981">
                  inflation is up <em>8.5%</em>
                </a>
              </p>
            </div>
            <input
              type="number"
              id="hourlyRate"
              name="hourlyRate"
              placeholder="100"
              value={hourlyRate}
              onInput={(e) => setHourlyRate(parseInt(e.target.value))}
            />
          </label>

          <label for="desiredHours">
            <div>
              <h2>How many hours do you want to work a week?</h2>
              <p>
                Include things like getting coffee, going 💩, walking the dog.
                We're not robots 🤖.
              </p>
            </div>
            <input
              type="number"
              id="desiredHours"
              name="desiredHours"
              placeholder="10"
              value={desiredHours}
              onInput={(e) => setDesiredHours(parseInt(e.target.value))}
            />
          </label>

          <label for="desiredWeeks">
            <div>
              <h2>How many weeks do you want to work on this project?</h2>
              <p>
                How long do you want this project to go on for? Alternatly, how
                long do you think it will take to "finish", if such a thing
                exsists.
              </p>
            </div>
            <input
              type="number"
              id="desiredWeeks"
              name="desiredWeeks"
              placeholder="2"
              value={desiredWeeks}
              onInput={(e) => setDesiredWeeks(parseInt(e.target.value))}
            />
          </label>

          <div className={styles.resultsContainer}>
            <p className="results">
              Total: <strong>${amount()}</strong>
            </p>
            <p className="results">
              Weekly: <strong>${amount() / desiredWeeks()}</strong>
            </p>
          </div>
        </form>
      </header>
    </div>
  )
}

export default App
