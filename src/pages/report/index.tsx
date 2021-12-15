import Image from 'next/image'
import Link from 'next/link'
import { PageWrapper } from '../../components/PageWrapper'

const ReportPage = () => {
  return (
    <PageWrapper>
      <main className="flex flex-col items-center justify-center max-w-3xl mx-auto">
        <h1 className="mt-10 mb-4 font-mono text-6xl font-bold text-yellow-600">
          Final Report
        </h1>
        <h4 className="font-sans text-xl">
          Ben Allan-Rahill and Danielle Newberry
        </h4>

        <div className="px-4 py-2 mt-4 text-white bg-blue-900 rounded-md cursor-pointer hover:bg-yellow-500">
          <Link href="/">home</Link>
        </div>

        <h4 className="self-start my-6 text-2xl font-bold">Hi! 👋 </h4>
        <p className="self-start ">
          We are Ben and Danielle and we worked as a team for our final project
          in Middlebury College&apos;s{' '}
          <strong>CSCI 0435: Embedded Systems</strong>. For our final project,
          we made an IoT sunrise lamp that helps you get up in the morning!
        </p>
        <h4 className="self-start my-6 text-xl font-bold">🥅 Goal</h4>
        <p className="self-start py-4">
          &emsp;&emsp;An alarm clock with a sunrise wake-up feature and
          potentially additional capabilities. It would allow you to easily set
          a specific time to trigger the wakeup/sunrise process either by using
          buttons on the time display screen or by using wifi to upload a time.
          You would be awoken gradually over a 30 min period where the lamp
          brightness increases until your specified wakeup time where an alarm
          sound wakes you up for sure.
        </p>
        <h4 className="self-start my-6 text-xl font-bold">💪 Motivation</h4>
        <p className="self-start py-4">
          &emsp;&emsp;It is downright depressing waking up these days to the
          grey haze of a Vermont sky in the morning! A good sun presence leads
          to an easier wake up. Additionally, it would be cool to have the
          interactive capabilities of long distance friendship lamps. Covid
          means more time in between visiting friends and family and it would be
          useful to have a lamp that allows you to easily send a ‘hello, I’m
          thinking of you message’.
        </p>
        <h4 className="self-start my-6 text-xl font-bold">Bill of Materials</h4>
        <div>
          <table className="border border-collapse border-gray-500 table-auto ">
            <thead>
              <tr>
                <th className="p-4 bg-gray-300 border border-gray-200">
                  Component
                </th>

                <th className="p-4 bg-gray-300 border border-gray-200">
                  Purpose
                </th>
                <th className="p-4 bg-gray-300 border border-gray-200">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Adafruit FeatherWing OLED - 128x64 OLED Add-on For Feather (w/
                  headers)
                </td>
                <td>LCD display for time with buttons</td>
                <td>$14.95 (x2)</td>
              </tr>
              <tr>
                <td>Stacking Headers</td>
                <td>Stacking the clock on the Feather</td>
                <td>$1.25 (x2)</td>
              </tr>
              <tr>
                <td>
                  Adalogger FeatherWing - RTC + SD Add-on For All Feather Boards
                </td>
                <td>Real time clock</td>
                <td>$8.95 (x2)</td>
              </tr>
              <tr>
                <td>Feather Huzzah (W/ stacking headers)</td>
                <td>Wifi and bluetooth capabilities</td>
                <td>$21.95 (x2)</td>
              </tr>
              <tr>
                <td>5V 1A (1000mA) USB port power supply</td>
                <td>Power!</td>
                <td>$5.95 + $2.95 (x2)</td>
              </tr>
              <tr>
                <td>
                  NeoPixel Ring - 24 x 5050 RGB LED with Integrated Drivers
                </td>
                <td>Both color and sunrise lighting</td>
                <td>$16.95 (x2)</td>
              </tr>
              <tr>
                <td>Breadboard</td>
                <td>Testing and using the pins of the bottom feather board.</td>
                <td>$7.99 (x2)</td>
              </tr>
              <tr>
                <td>Jumper wires</td>
                <td>Connect the components</td>
                <td>$4.29 (x2)</td>
              </tr>
              <tr>
                <td>Buzzer</td>
                <td>Alarm noise</td>
                <td>$4.95 (x2)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="self-start py-4">
          &emsp;&emsp;Above are the parts that we used in our project. We chose
          the Adafruit Feather ecosystem as it allowed for compact, easy
          assembly and the ESP32 Feather Huzzah can use MicroPython which helped
          speed up the development process. Within the Feather Ecosystem, we
          selected the OLED display and the real-time clock (RTC) add-ons that
          can plug directly into the Huzzah MCU. With stacking headers, the RTC
          and OLED plug directly into the general purpose input-output (GPIO)
          pins on the Huzzah, creating a compact form factor that can be placed
          into the breadboard. We used a half-sized breadboard to connect the
          Huzzah to the Neopixels and the Piezo buzzer. Connecting the Huzzah to
          the breadboard allowed us to access the GPIO pins (A0, A1) on the MCU
          to connect the Neopixels and the buzzer. <br />
          <br />
          &emsp;&emsp;For power, we used a 5V 1A USB power supply and connected
          this to the micro USB port on the Huzzah. This power supply could be
          used to power the Huzzah and the Neopixels. The Neopixels used the USB
          pin on the Huzzah which provides the power from the power supply.
          Lastly, we connected the Neopixels and the buzzer to the ground pins
          on the Huzzah.
        </p>
        <h4 className="self-start my-6 text-xl font-bold">🎛 Circuitry</h4>
        <Image
          src="/suunns_circuitry.png"
          alt="circuitry"
          width={500}
          height={500}
        />
        <h4 className="self-start my-6 text-xl font-bold">👩🏼‍💻 Code</h4>
        <h4 className="self-start pl-4 my-2 text-lg font-semibold">
          ⏺ Buttons
        </h4>
        <p className="self-start py-4">
          &emsp;&emsp;The high-level structure of our code is a 3-state finite
          state machine. Our three states were: idle, edit_alarm, and sunrise.
          Idle is the main state that the suunns sits in waiting for user input
          and continuously displaying the clock to keep the time accurate. The
          edit_alarm state is triggered after detecting a long press on the
          button C. This state is when the user is able to change the time of
          the alarm using the A and B button and exit with a long press on
          button C. The sunrise state is triggered when the alarm is detected
          during the idle state. The sunrise state is when the light starts to
          brighten over a six minute period and then an alarm sound plays. This
          state is exited by pressing on the B button, starting the idle state
          again. <br />
          <br /> &emsp;&emsp;The button presses are detected using a mix of
          interrupts and polling. To detect a long press on a button, we used a
          special interrupt service routine (ISR). The{' '}
          <code>LONG_PRESS_ISR</code> sets the time of the first press and
          compares this with the time the button was released to determine if
          the press was long enough. We can do this by setting the interrupt to
          trigger on rising and falling, i.e. when the button is pressed and
          released. This means that the interrupt will trigger once when the
          button is pressed, setting the first timestamp and again when the
          button is released, checking this against the first timestamp to
          determine how long the button was pressed for. <br />
          <br />
          &emsp; &emsp;The buttons that do not need long press functionality use
          another ISR. This ISR sets which button was pressed on the Button
          class. This record of which button was pressed is used by the Button
          class’ check_for_input function. This function runs the set callback
          functions for whichever buttons have been pressed.
        </p>
        <h4 className="self-start pl-4 my-2 text-lg font-semibold">
          ⏰ Clock Display
        </h4>
        <p className="self-start py-4">
          &emsp;&emsp;To render a digital clock, we used the OLED FeatherWing
          display and the sh1107 library. This third party library allowed us to
          send frames to the screen and subsequently show those frames. However,
          when it came to customizability, this library had minimal options. We
          could send simple text, but the font sizes were too small to mimic a
          real clock. <br />
          <br /> &emsp;&emsp;To solve this problem, we implemented our own
          abstraction on top of this library. Our driver lives in the Screen and
          ClockDisplay classes. The Screen class implements the basic
          functionality of drawing digits and clearing the screen. The
          ClockDisplay builds on top of this, by using the Screen class to draw
          the digits of a particular time, the separating dots, and the AM/PM
          indicator. The ClockDisplay class splits up drawing the minutes and
          the hours so that if we were to change the interface of how the alarm
          is edited, it would be straightforward.
          <br />
          <br />
          &emsp; &emsp;To display the alarm and the live clock, we made two
          child classes of the ClockDisplay class. Currently, there is no
          difference between the two classes but for future organization they
          were split up. Our Watch class then contains both a LiveClock and an
          Alarm. The Watch class exposes functionality to edit the alarm, draw
          the control sequence (flashing indicator), and trigger the edit alarm
          state. Finally, a Watch instance was created on our Suunn class to be
          used by the different states of the machine.
        </p>
        <h4 className="self-start pl-4 my-2 text-lg font-semibold">
          🕰 Real Time Clock
        </h4>
        <p className="self-start py-4">
          &emsp;&emsp;To keep track of real time we used another Feather
          stacking header board: the Adalogger FeatherWing RTC + SD add on. As a
          driver to communicate over I2C with the RTC we used the pcf852 third
          party library which is made for the clock in the board. This library
          made it easy to ask the current time in units of year, months, day of
          month, hour, minute, second, week day, or year day. It also had
          functions to set the current time with all the previous parameters.
          Which is something that needs to be done initially in order to sync
          the clock up to keeping track of the current time. Lastly, it had the
          capacity to trigger alarms. We also created a subclass to the pcf852
          we named real_clock that made it simpler to extract individual
          components of the current date with more getter methods. The Clock
          Display class then drew from this to display the current time in
          military format. <br />
          <br /> &emsp;&emsp;With the alarm feature of this library we are able
          to set an alarm that triggers at a certain hour and minute of the day
          by continuously checking if the current time is the pre-set alarm
          time.
        </p>
        <h4 className="self-start pl-4 my-2 text-lg font-semibold">MQTT</h4>
        <p className="self-start py-4">
          &emsp;&emsp; To communicate between our MCU and our website, we used
          the MQTT protocol. This leightweight porocol allows clients (devices,
          websites, etc.) to send messages to each other through a broker. We
          chose Amazon Web Services&apos; IoT core MQTT broker. Using access
          tokens, we built a very simple Node.js server to take a request form
          our client-site and send it to the AWS broker. Idealy, we could go
          straigt from our client to AWS, but after trial and error, it was
          simpler to write more code and create a server. <br />
          <br /> &emsp;&emsp; On our device, we had to upload our AWS access
          tokens and create an MQTT client. The suunns are subscribed to the{' '}
          <code>suunn/color</code> topic. This allows them to listen for changes
          form the site. If you wanted to set up your own suunn, all you would
          have to do is change the WIFI credentials in our <code>MQTT</code>{' '}
          class.
        </p>
        <h4 className="self-start pl-4 my-2 text-lg font-semibold">
          💾 Final Product
        </h4>
        <p className="self-start py-4">
          &emsp;&emsp;Our code is a continuously running 3 state finite state
          machine. Since we determined we could contain all of the suunns
          functionality in 3 states this seemed like the most succinct and
          organized way to structure our code. When the suunn is first plugged
          into power it will automatically enter the idle state where it
          displays the current time. In this state the clock is also constantly
          listening for mqtt requests, checking if the alarm time criteria has
          been met, and waiting to respond to any button interrupts. Anytime the
          suunn is in this state and a MQTT message is sent the suunn will
          change to the specific color specified in the message. When the user
          presses the A or B button in the idle state the suunn remains in the
          same state but the light turns on/off or changes color respectively
          <br />
          <br /> &emsp;&emsp; If the user presses the C button for a long time
          the suunn transitions into the edit alarm state. In this state the A
          and B buttons are used to increase or decrease the time. Once a user
          has decided on a given alarm time they would like to set, they exit
          this edit alarm state with another long press of the C button.
          <br />
          <br /> &emsp;&emsp;When the suunn senses that the current time has
          reached the pre-set alarm time it enters the sunrise state. The
          neopixel gets gradually brighter and brighter over a pre-set period of
          time (for testing we have it set to 10 seconds, but it can be easily
          changed to 10 mins or even 30). After the light reaches full
          brightness the piezo buzzer will play a song. The code to play this
          song has been adapted from the Micropython on ES8266 Workshop&apos;s
          documentation examples for buzzers (BeeperExample). It uses PWM to
          make the melody by changing the frequency of the buzzer to play
          various musical notes. This alarm sound will play continuously until
          the user presses the B button which halts the noise and puts the suunn
          back into its idle state.
        </p>
        <div
          className="flex justify-around w-full mb-10 font-bold"
          id="demo-vid"
        >
          <div>
            <video width="320" height="240" controls>
              <source src="demo.mp4" type="video/mp4" />
              Your Browser does not support this video
            </video>
            Interface
          </div>
          <div>
            <video width="320" height="240" controls>
              <source src="mqtt.mp4" type="video/mp4" />
              Your Browser does not support this video
            </video>
            MQTT
          </div>
        </div>
        <div className="px-4 py-2 text-white bg-black rounded-md cursor-pointer hover:bg-gray-800">
          <Link href={'https://github.com/daninewbs/Suunn'}>
            🐙 Github Repo
          </Link>
        </div>
        <h4 className="self-start pl-4 my-2 text-lg font-semibold">
          ♿️ Acessibility
        </h4>
        <p className="self-start py-4">
          &emsp;&emsp;Most of the user interface of the suunns is currently not
          that accessible. The stacking feather OLED is fairly small and the
          text on it in turn is not visible from a distance. The buttons of the
          screen are also quite small, making them hard to press, and their
          purpose is not immediately clear. There is no text displayed on the
          screen that describes their functions. A user would have to consult
          the instructions to see what the various uses of the buttons are. To
          use the suunns fully with the adafruit io dashboard capabilities a
          user also needs access to Wifi. Lastly, the price of this device could
          prove to be a barrier for some clocking in (haha pun intended) around
          $50 which, however, is cheaper than other sunrise or friendship lamps
          on the market which cost upward of $80.
        </p>
        <h4 className="self-start pl-4 my-2 text-lg font-semibold">
          😇 Ethical Implications
        </h4>
        <p className="self-start py-4">
          &emsp;&emsp;There are a few ethical concerns to consider with our
          product. Firstly, the sustainability of making a lamp in a market that
          makes our product redundant creates an environmental concern.
          Currently, our product does not store any data persistently. However,
          if in the future we are storing data some security concerns could
          arise such as a user&apos;s sleep data being used to target specific
          pharmaceutical ads.
        </p>
        <h4 className="self-start pl-4 my-2 text-lg font-semibold">
          🗓 Schedule
        </h4>
        <div className="schedule">
          <table className="border border-collapse border-gray-500 table-auto ">
            <thead>
              <tr>
                <th className="p-4 bg-gray-300 border border-gray-200">Week</th>

                <th className="p-4 bg-gray-300 border border-gray-200">Goal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Decide the hierarchy of the software. How are we going to
                  structure the drivers? (Both)
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  Wire the LCD feather correctly to display the real time.
                  Decide if we want this time to be shown at all hours of the
                  day or just in the waking hours. Also connect the led to the
                  huzzah and be able to power on and off (decide on what
                  intensity is appropriate as the normal on mode). (Both)
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  Program the LED to gradually light up over a 30 min period
                  with pulse PWM. When the light hits full brightness the alarm
                  speaker will make noise. GIven a pre-set alarm time of 7 am.
                  Decide the rate at which the light increases and how bright it
                  will be at its end state. Also,make sure when you set off
                  light and turn it back on the intensity is the normal on mode.
                  (Both)
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  Program specific button pressing sequences. Be able to
                  save/set time, turn the alarm noise off, turn light on and
                  off. (color change) (Danielle). Use the Feather’s wifi to
                  re-set the alarm time w/ simple web server (Ben).
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  Finish up goals/ tasks in milestones 1-5 (Ben). Build a second
                  alarm clock. Use wifi connection to sync up the clocks colors.
                  Clock will continuously ask server if the other clock has
                  changed color and if a change is sense it will go to the next
                  color in the cycle (Danielle).
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="self-start py-4">
          &emsp;&emsp;Our actual schedule vs our planned one diverged quite a
          bit. Rather than having 5 weeks to work on the project (where we
          expected to have our pieces for a minimum of 4 of these weeks) we
          ended up having a lot less time than anticipated. Week 1 we started as
          we planned with Milestone 0. Both of us determining the wiring of how
          the 3 Feathers, neopixel, and buzzer will connect. After the wiring
          was determined we started by making sure the neopixels and buzzer were
          working correctly. We ended up not using PWM for the increasing
          brightness since we were working with neopixels. The neopixels used a
          loop to gradually increase over a span of time and then triggered the
          buzzer (milestone 2+3). Then we split off to work in parallel:
          Danielle worked with the Adalogger FeatherWing RTC + SD add on and Ben
          worked with the OLED FeatherWing display. Ben completed milestone 4
          creating specific button sequences to control setting the alarm time.
          Danielle also connected the devices to wifi to receive MQTT messages
          from the Adafruit IO website dashboard(milestone 6).
          <br />
          <br /> &emsp;&emsp; At the beginning of Week 2 we came back together
          to merge our code into the finite state machine structure and make our
          second clock. Both the stacking boards worked together to accomplish
          milestone 1: having the OLED accurately show the current time. We also
          added more button functionality to turn the light on/off, change its
          color, and stop the alarm buzzer (milestone 1.5). Some of the
          milestones changed a bit as we went - the suunns do not have the
          ability to change another suunns color directly (without using the
          MQTT site). However, milestone 5: having the user be able to set the
          alarm time through wifi was not accomplished.
          <br />
          <br /> &emsp;&emsp; Week 3 we worked on making our own website that a
          user can use to view all of these instructions and also change the
          suunns color on.
        </p>
        <h4 className="self-start pl-4 my-2 text-lg font-semibold">
          😖 Issues Encountered
        </h4>
        <p className="self-start py-4">
          &emsp;&emsp;During the development process we encountered a couple
          roadblocks but most did not have a significant effect in delaying our
          progress. The RTC was giving a strange issue complaining about
          overflow in converting from long int to machine language. We
          discovered this was because we needed to set the RTC to current time.
          It was set to 2013 which meant the conversion math was creating
          overflow. Connecting to wifi on the Middlebury network proved to be a
          slight setback. Initially we were attempting to connect via hotspot
          which had erratic behavior very rarely connecting. However, after we
          found and registered the Huzzah&apos;s mac address with the Middlebury
          wifi this was resolved. We also had a faulty wire in one of our
          neopixels, but since we had a functional second one this did not stall
          our work. Overall, our original goals stayed the same and our final
          product had almost all the features we wanted for it, bonus ones and
          all.
        </p>
        <h4 className="self-start pl-4 my-2 text-lg font-semibold">
          🚀 Future Work
        </h4>
        <p className="self-start py-4">
          &emsp;&emsp;The aesthetics of the lamp we hoped to make look a little
          more professional. We foresaw having a wood box base and an opaque
          glass cube atop this for the light. We also would have a way to set
          the alarm time from a website or app.
        </p>
        <p className="self-start font-medium">Other ideas: </p>
        <ul className="self-start list-disc">
          <li>Pairing with another Suunn</li>
          <li>Heart-rate Monitor alarm </li>
          <li>Music Alarms with speaker</li>
          <li>Brighter Lights</li>
        </ul>
        <h4 className="self-start my-6 text-xl font-bold">References</h4>
        <div className="flex flex-col self-start underline">
          <a
            href="https://micropython-on-wemos-d1-mini.readthedocs.io/en/latest/basics.html#beepers"
            className="self-start py-4"
          >
            Buzzer Info
          </a>
          <a
            href="https://github.com/mchobby/esp8266-upy/blob/master/pcf8523/"
            className="self-start py-4"
          >
            Real Time Clock Library
          </a>
          <a
            href="https://github.com/nemart69/sh1107-micropython"
            className="self-start py-4"
          >
            OLED Screen Library
          </a>
          <a
            href="https://cdn-learn.adafruit.com/downloads/pdf/adafruit-huzzah32-esp32-feather.pdf"
            className="self-start py-4"
          >
            Huzzah Datasheet
          </a>
        </div>
      </main>
    </PageWrapper>
  )
}

export default ReportPage
