import { BsThreeDotsVertical } from 'react-icons/bs';
import { NavLink } from 'react-router';

const products = [
  {
    id: 1,
    name: 'Handcrafted Mug',
    description: 'Beautiful ceramic mug for hot drinks.',
    image:
      'https://www.potteryfortheplanet.com/cdn/shop/products/Pottery-For-The-Planet-Ceramic-Mug-12oz-20_313x.jpg?v=1742863557',
    price: 100,
    discount: 20,
  },
  {
    id: 2,
    name: 'Wooden Spoon Set',
    description: 'Perfect for eco-friendly cooking.',
    image:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhMTEhIWFhUWFxcZFRYVFxUVFRYYFxYYFxgVFhUYHSggGBolGxUVITEiJSkrLy4uGCAzODMtNyotLisBCgoKDg0OGxAQGzUmICUvLS0rLS4tLS0tKzAtLy8tLS0vKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOMA3gMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAABQYEAwIHAf/EAEUQAAECAwQFCQQJAgYCAwAAAAEAAgMRIQQFEjFBUWFxgQYTIjKRobHB8FJictEHIzNCgrLC4fGSohRDY3PD0hUkFoOz/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAMEBQIBBv/EAC4RAAICAQMCBAYCAgMAAAAAAAABAgMRBCExEkEiMlFhEzNxgZGxQsGh8AVS4f/aAAwDAQACEQMRAD8A+4oQuFui4Yb3ahTwXjeFk9Sy8GG33kWuaB1CAS4VJBpNu7PgslmiuxuhPcelQEkkBwq0jYfkll1R+chOYT0oU3N2wyekOBr2LpEizDQZzbSez7vEVG4BZk7m31Pjn+mitV42/wB9mModqiMyM5ULXVFNE8wm1jtTYgmMxmDmCp6HFJniMyTUmVeyi6w4phuxt4j2hq3rynUuEsN+H9BOnK9yjQvMKIHAOFQRML0tUjBCEIAEJbb72DCWtGJwz1D5lLv/AC8UnMCugcNO8KezVVweGNjTKSyUaEqs961AeOI+SaNM6hMrtjYvCziUHHk/UIQmHIIQhAAhCEACEIQAIQhAAhCEACEIQALNeLZwn7p9lfJaUFeSWVg9Tw8nzVkPA8jUTJNIMSa833Y8Dzq8tB7O8FZ7K9YEouLaZpp9SyMmFatCwzWqC5B4M7lj1dDPxN3T6Q7SD+JNVPQThex2oie40PcSqFaujn1V4fYivjiWfUFgvu2c1Cc4Zmg3lb1OcsH9Fg3+XyTdRNwqbRzVHqmkxZCdntXaVZ+tP7LhZjMDcPXatA2avl/KxDQPYfWZGU/H0U0ui19LATQ5b/38tqVt1Dh5L02YIlQgzHD90yux1yUjicVJYKpC8QomJocMiAe1e1umcCEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAtvuw84yYFRqzI+YzHHWoqI0sd6kQvo6QX7c2IF7BtLRntIGnd2ajBq9O5eOPJTRbjwsTwXzktkNKIc2nZ5JjAiLNRWza4zBVDCfNoOsA9qmw6ie3W+cJmwS/pp5LQ0L8TRLqFsmalPcr4c2tOrPgW/NUKX37Z8cIjV50858FXqI9VTQmqWJpklYTQes/47luhN8/XilljOY0/JM4JmsSJoyOo2L20fNciPXrevQdp3d9Cg5Ht0PnDlqJHfMdxC2pXcZpEHvA9oA/Smi29O81x+hn2LE2CELy94AmSANZoE44PSFkfecEf5gPw9Lwmv2BeEN5k11doc3sxATXHxIZxk66Zc4NSEIXZyCEIQAIQhAAhCEACFytMdsNpc40HqQSCPfD3zl0RoAzI0TKRdqIVc8jIVSnwUiFLstj9D3cSTXcVvsl7nKIOIFRvGnh2JUNbXJ4ex3LTySyjteN0tiTc2Qdp9l2/Udo70hdZywlpBBGg6tB2jOqr2PBAIMwciMlmvCxiK3U4dV2rYdYOkeYC9v00Zrqjz+wrucdnwTRJTbk/aOsz8Q8CPA8SlEQEEgiRFCNR0jw4Ea0Wa0Fjg4Zg5a9B7Qe9Z9Nnw7Mv7lU49cdixX49oIIORoV+Q3hwBGRExxXpbZnEHeEEwY5B0k10be2h4rRZ3VKeco7BzjMQzGe7XwmeBOpTlncZyOYzG0LEvq+HPHbsaNc+uORifXriho815BovbEp8nQzuL/M/D5pslPJ0zbFP+oQNwY3zmmy2tOsVogt87MN6W7mmiUi52U8hrcdmzT3qcfEc+bnEuOs6NwyHBd7wjY4rjtkNzTLxmeKzs6vrUVm6m5zm12RXTWoxz3PAYfW5aIdPW5fjT5oBr61qXGBuclXBfNoOsA9oXtcLF9mz4W+AXdfQxeUmZj5BCEL08BCEIAEIQgCa5T2vpsh6pnu/cJUHrbyoaRFDtdO4fI9iWYScp0qZAmQ1mWTdqwtT1O1mnSkq0boUzIaSab9C7N06CDIg5g6j3cJFFkgYoWJhJezrt0ynRzZV/jXnrcOebjb9q0VAl9Y0aveE6dmRmOo05j7vde/8A6cynh+3cLDa+bPuHMaj7QHkqBrgRMVByUpDd2eqEetSa3TacJwHI9U6jmW+f8qjSXuL+HL7Cb68rqR6vyw4hzgFQOkBmW6xtFT2jUpuLEApmdGpXKlb3sfNxOiOi6ZGzWOBlwI1LrW0/zX3DT2fxZs5NW0y5p+YmW7RpHn26k+UPDm12JvWBxA7dXrWrGx2kRGB406NR0hM0d3VHpfKONRDD6l3OxCl70u/A8S/CdY0tO0U4S2qpXC2WYRGlp3g6joPranain4kcd+wuqzoZMQtRX6+JhB1rqARMOEnAyI2j0Cs0dqx2muS9bjvku2VnadJc8nfiI8k1JS/k/wDYM3v/ADuTFbdPy4/RGfZ539SMZ8vAJlcdma9xxCeGVNpnXhI9qVYpOlql4LTYrU6G7ENxByIPrNY9UlGxORdNNxwhtymhgQHRMnQ5OadNCJs3OFJbQcwEmHW7PXev28rZEjlrXybDBDsDZnEW1aXvMpgEA4QMwKlEM17/AF2LvVWxsl4TmmDityosX2bPhHgu65WYSY0e6PBdVrx8qIXyCEIXR4CEIQAIQhACflHYsbJjMeIqPEjiFNXZbDDeHDMaNY0hXcRgIIORUbft3uhuLhvO0e0PPUdhWbrKnGXxIlmnmmuhmmK3mnNjwOoTIt9gnNhHsnR2D7q7xQJCPCo2fTAzhu1/D6yNFt3XhhzGJjhJ7TkQdnatbXGzvD2HHBiZE1mNLHe8K56jtSozUlnt39n/ANl7ep3KLTx+Pf2ZptEPGDFYK/5jBp/1GDTtGneOlyhmYodRBHaCDr0zXQt5stiQj9W49H3DmWOGqnqhP4GibiBIOdPCPuzAnLeZniVzck93z+/cIPt2/XsPbFHxsBOeR3j1PivF42XnGEaRVs9Y17CJg7CVhuyNhiYZ0eKfE2ve2f8ASnC0qZfFr3+5JNdEtiNLeG/MawdoMx2rbcls5t+E9V/c71Rd76suF2MZOz2Ol5gdo2pRFb3+KzJKVFm3YsTVkC1Ql9zW3nGV6zaO26j61FMFsQkpRUkQSi4vDFV8QJERBsa79J7acdiUR2+vW9VFohY2uadII3bVNRKgTz0jVr71nayvEupdyrTyysDbk676mXsucO12L9SZpHydiSdEZrwuH5XeDU8VunlmpCLVibIi+Zw7Q8aCJjbWZ4Sc1eGxiTKVKz8k35W2XqRRmKHjOXn3JXDhk8WghZOorcLGi6qXVBM8iIZ5d27I6l3s83OAAzkO2i8Ns0wAdCY3RBnFbsBPZTxcEuuDlJROpySTZSBCEL6AywQhCABCEIAEIQgAXG02cPbI8DpC7IXjSawwTwRV63U6E6bRwGR+H/r4rhd15tbiY8Yobus39TdThIV2DVNXMWGHAhwmDoKnb25OT6UOvZi+TuMjtKzbdLOEuur8Ftd8ZLpmK7NEpIOMtunaQKJjBf3eCTNs72EyrLMZEb2moK2WeNPYRoWem09ylpdjZb4+FrXt6zXgjbLRxFOKpoMUPa1zahwBG4iYUdaHYqaE35M2uhgnNtW7Wk1HA+IWho7cScX3Jb4eHI4tMEPaWnT3HMEbQZFSsaGQS11CDI7CNWzIjYQq9J79suUQbA79Lu0y47FRq6uqPUuUKon0vAnsVpMKIHcHDWNPkeCrmOBAIMwRMHWCvn172owyw0DSQHOIJA6TRKYo0yJMzqkNlNybt8xzZO1h1jMifeOOpT6O3pfQ+HwN1FeV1Ieqet0OT3jbMfi6XiT2KhSW/WEOBGlpH9Jp+Y9ip1cc159BNDxIw3dEwxoZ0GbT+LL+4NVQoiNMSINQQRqmKjvA7FaQIoc1rhk4AjcRNL0M8xcTvUR3TOdts/OMczWKHUcweBkpBkxsLaS1GZBHAghWymb1g4YztTwHceqe9oP4ka6vMVP0DTyw+kxYjTcPDJOeTkPrvOsNHCpP9w7EoIn69bVR3LDwwWbZntJl3SU2ijm3PoN1DxDBtJULe17WokOEfA0ulhYxolp6xmVdPyK+c3r1W7H+RVWrnKOMP1FaaKecnH/yEUmsaKf/ALH+AK9ttZ9p3Fzj4lLHvzX42ISQACSSAAKkk5AKHrk+5b0L0KGBHnpPadm1MIT5gdJ4poiRB4FI3QYkIhsVpacM5GWW8UTCDFy+H5I6pJ7nDinwb2xYkujGiN24g/8A/QOWu7rziglsUteBk4NwO41IPABLWPp62rvBE3HcfEJ1Ns+pLImyEcPYqkIWC9LVhGEZnPYFpWWKEXJkkYuTwjXDjNdORnJdFNwoxBpMbU1sl4A0dQ69HHUpqdXGe0tmNsocd0drZYWResK6HCjhuI8Mkitt0PZVvSA+8B0h8TB1htb2KmQm26eFnK+5xC2UOCMflMVnq+aztjOY5r2ZirdR1jcR4qqt92B03MkH6fZf8Wo7fFT0az5znShBzB1LLtpnVLP4ZZCyM0VVhtbYrA9uRzGkHSDtXaIwOBBEwQQRrBzCjrvtboD8Qq09do0+8PeHflusIMZr2hzTNpEwQtPT3q2Pv3JLa+h+xH3nYjN0MuIIIwu0+6/iJg/iSm7LSYT+bJkWFvN4izHhl0cQbp6LqezhnWatL/s0284M2db4DmeGe4HWom+oGAiM3NvWoDOTXBomJEYi6U5ynJZ99Xw54X2K6p9cdz6HYLUIrA4biNR0hZ76ZOGD7Lge3on80+CQXBeIY4Gc2OoTqkZT2EGYPFVVqhY2Ob7TSO0Zq6uz41TXfhks4/DmSkUZp7ydi4oIGlhLfMdxCSitcqA9tVu5PxMMR7PaaHDe0yPc4dii0kum367FF0cwH6ScomdKEfiHbhd+lO0p5QCkP4z+Ry0NSs1SJavOhC59ZbvBVl3CUKGPcb+UKRcKjh4BV9gP1UP4G/lCi/4/zSKNVwjuV84vXqcWnt/lfR18+vJk4e9gI4fwm63+P3PNLyybixM1wZaiwtc0yc0gtI0EVBXONEzWJ8RQo0cFDEvaJGfjivxOkAKAADOQAAGZPqSYw49NdFJWeN67E6s8ZEm28s56ElhD+C8jXWvrtKcXe3FFl7rz2OZ81O3cZuA2y+fgqO43/wDshuqE8ni+GB4FM0yzYia/aLKG0xwxpJ4bSp6M4vJM5zzW28HlztgmB+6xFsjMLrVW9csLhC6YdKz3PxfjYss/5XtwXFwUjHo3We8TDFat1aRuTmDGa8TaZj1QqUxkbR3haLHHLDNh4aDsVdGrcNpbr9CbKFLdclOsF52HGMTR0gKj2hq36j81qs0cPExxGpdVqNRsj6pkabiyMiQtPrdsK63XeBgOkaw3Gvun2gPEei4vaw5vaPjH6ht16+FZ+NCqsicZUT2LotWx3LRpBExIgjeCD4hSlss3NvczQKt2sOXEVbwB0rpct58yebefqyaH2Cdfunu3ZN79shezG0TcyZAGbmnrN7ACNrQrZ41FWVyieOap4fBJ2eyiG2QLjUmbjMkmp768VU3DbcTcBNWim1v7ZdiT2Pmi6cQnAWmRbi05Ho1ynlpkst2RXwwxxniFaymRqdKkyM5UmTLQpKZutqeeeR9ketYO98uMMRcNCx0yaUaSHmU6TDHGU6TFVyuS0kcy9xJIcWuxDC4YjKThISIDholTUmV8w2vdOXRiwxTXmDPg5inrvoYkKc5EETc1zpumDiLQJOnWVc89A5s8Fja9cnsPFDc+iJXf4m2H8f6HrZd8fnIbH6SBPfkR2zWS/erD/wBz/jetS55qb9iOtYmhHhHr1sVPd/2UP4G/lCmHt9dvzVNdv2UP4R4KLQ+Zj9TwjSo2JZC+EMI6QAIyrQTGz9lYlTti6jdw8k3WLy/f+jih4yfMb1s7obzMEAmmz3TtCUxHr7BeV1w4zTzjZk5EZ/vxUnePIVszzcUganCffNRNYNCFyfJGQImSb2eL5LV/8Me2pjNlsafmt1nuNkOrnF51ZDsXL3O+uJtupwAL3UbWp7ymPIq085a4ztHNU3Y2ySG2xiaaBkBkm30eH/2In+1+sJ+m+YiW/wAjZc2izB1RQ9x3pXGgkGREj3HcU8XONBDhIj5jaFbdplPdbMjrtceRA9utc3BMLTZi3Orfa1fFq3rG9kll2VuLwyyMk+DM5i4FpGX7fstRCJJXTk7TOt3WstM+0bFRtdMTGRUwIWkdi33Pb68278B8W/JXaO3pfRLvwT315XUhykN7WDD0m9U/2k/pPce58vxzQQQRMHMa1fbUrI4ZNCbi8oiXtzBTS4r0wEQYhoaQ3HuYT4dmpeLzu/A6mR6p/SdviOKmo8VzYpEQOLHAy6uFoDmtaQJgz6fSzJJEqCmVBzpn/u5a1GyJTW27XMe4MaSw9JshPDOrmEDITmRokZaF7sd0PeQXjC3+47ho4rpcV7EkQYp6X3HH741H3vHenythRVY+tfgnlZOHhYqvqCA2GQOqcO5pb82tUaWBtryE3ggGUndJszJ0qtHNtpPN52K9vNk4T9gxf0nF5KRttlL3Nk4CRBPRDp4XAgTzFQDQpGsjixP1Q3Tvw4H/ACbjTa9nsumPhfXxDl15QdWH8f8AxvSy6YuCO3U4OafzNP8AbLimXKDqQ/j/AON6bCfVpn7bC5RxaJnFUd1H6pm5TM6+tZVLc/2LNx8Sl6F+N/Q71HlRqfkdyn7Gei3cFQRMjuKnrH1RuHgm6zmP3/oXRwzY7QsNrNFscaetakuXfKT/AAUAODQ6I8lsNp6tBNznSqQKUGkjLNST32Q+C3GVqySy1RKyUlevKy0WcQnPeyJjLg+EWMYZNl04bmOMmmdMUzStZhtFDtDYjWxGGbXgOboo5sx/C4cXEcjJFNSn30ej6+J/t/qCQRc1Q/R4Prop/wBMfmTtN8xC7/Iy9QhC1jOBYLTd+lkh7p6vA/d8Ni3oXE4RmsSR1GTi8om7Q3D1wW7T1f6su9eYbZ5VCplniWGE6robCdZa2fbJRy0Kz4WPWo9UJCZeqrFHbOoT20XMw9RzmHYS5vFrp03SSq12SJC64m3229X8Qzb3japrdNOG/K9h0LYs33Xe85MiGR0O0HfqO1OVGxGrbd96uhyB6TdWkbj5eCdRrMeGz8i7aO8ShtEAPaWuFD6mNRUhet2ieCK0Ol0mkih0Yh4EbZZFV1ntDXjE0zHhsI0FcrwsYitlk4Va7UfMaCFTfSrY5XPYTVY4Pc+dWdxhv5h1RMYXTa2ROJ3Qa2oZNplpbLPVa3He2P6qKemOq72wP1DTrz1ynb1sOMFrhJzTkQHAOkcw4EFpnPLUcws1iDiHMdOcMgNfItnJoqKkzBnXdtWfVbKqX7RZOCmj6IROhUmyH0msnXFgJ2g4fEJrcd684ObifaDTkHj2hqOsehgvWFhjO0YiHN1GgBA2zBPEKnVOM61NCKU4ycWcLWCyI4CphuaaaSGteKaNyb3+8GHDIyL5jjDfJKGw6YWtrOjQMyanzqmN6wSyBAYalrmg8Ib0qp+CzC2O5rxR9RG+1jnBDDXEkhsxhwg4ccjMz6sjQHNVlzH6lu935iogzFqBOkSaQQThDJ4C2dBiDnYpZyCtbjP1Q3u/MT5r3RfM+wajymyL1TuPgp6xZDd5KhjdU7j4KesmTeCdrOY/f+hVHDO5do3eu5RX0lcnX2uA0wqxIRcQ3LE14Ac0E0nMNNdSd3ndUR8YRYTwxxENpcS8FghviOowdGKHCIWydKVCEsNltfSbjc1ohkt+sERxjdEDpObWHPGZEDPVQR8blMSPtlntFpEVv1xERjWtgRoUVjLPEGAGJzrxgAbhcRgJLsWSqLPYhBhMhAzDGtaCdOEAT45rneVhtIILYr3AMcGkva0iI/D0nSbJzAWTlI9cymKLJGsUcv8ArInQxO5yT3dMTJZgAA5sAYQQDWsyZTI3kYjraFQ/R59rG+BviVJ2ayuhghzy6bpgmZIGFrQCSa9XPaq36O/tI/wM8XJ2m+YhV/kZdIQhahnghCEACEIQAIQhACi3XR96FIa2ZNPw+ydmW7NJIkOpza4Zg0I2EKyWS3WBsUVo4ZOGY2bRsKjv0invHZj673HZkvBjPhnE0yPcdhGkKgu6+GRJNd0X6Bod8J8vFJLbZXwjJ+RycJ4Tu1HYeE0uewmvj62KKFtlEsf4KZQjYslbfN384MbB02jLLG32D5HQd5U2DpGW2hBGbSNBBTC7r7cyTYk3N0H7w/7eK63vZA4GPB6TT9o1tZgffaPaGkaRtFXWxjcuuHPdC4N1vplwJo4cy0uhTE2shxWRGHQ8vbIjQ4GGdhB3hVN12sR2EPaMTTJwlNp1OE9BUwwihbI4pSI+9SmWdFUXLZSxhLhJzjMjUJSAO35r3Sybm+lbHl6xHfk2QoDW9VrW7gB4JZyk6jJe3+h6bpRyjE2sHvH8pVd+1TwIq86ImLaHf4mGJignKQnLCQXhwApNwbInTOVFccm3Ewq54jluCi4sMf4mGJzmJlspSOBwD8U6nRhlpnoVlyaEobh7/wClqh0fzF9CrUeQaR+q7cfBTllNBuHiqK0dR3wnwU3Zshu+SdreY/f+hWn4ZpJ9cVhimvrWFqc5YnmvH5LPkymJmtRol9rW+15LBbF6jtCu0aFSfR19pH+GH4vU3HzVL9HXXtHwwvGIqdN8xCr/AJbLhCELVM8EIQgAQhCABCEIAEIQgDxFhhwLXAEHMGoKnrxudzJuhzc3SM3t83Dv3qkQlW0xsWJHcJuD2IGMSGOLRiIBLQKh2oUXO5r3e0yBIcCQ6bXNY/DKpBHRJBaZZjFmq28rnD5uhya/T7LviGg+8O9Sd4XU1znB7A2JIjpCeYlilk/RXYNSy7KZUvP+S2FkbFgrrrtsJ5oxrIhzEgCdoIzTNfLxGiQn4XYiycmSD3vyo7GBWrcsxi1Caq7n5Q9FvO1aQC14FZETBI3KunVp+Gf5E2adreJSpRyhNGb3flKaw3hwBBBByIqCk3KV0ua+J35Cn6j5TE1edCcnPYnXJt1HjUR3hTdvivLGQ4bACYjXPjFwBaxjg4saMyXYcJyEnHcqDkx/mfh/UoNKkrY79iq7eDHFq6j/AIT4KWssWbRu8lWvFClMa6muqJtOttO0ZHiq9VU7MYJ6ZqOci2M7NZi6qYRrnfoidrZ+BCzG6Yo0tPaPmoJaezPBUrYY5F9rNEutrqp1HueMR9ztd/1WWPydjO+8wcHO+S9VFnoe/Fh6k1Fdmqf6N3dO07oXjEXKHyQmenFJ+EBvjNU/J+7GQA5rGynKekk1qSalVaemUZZYm61OOEOEIQryQEIQgAQhCABCEIAEIQgAQhCABZ7bY2RRJ4yyIo5p1g6FoQvGk1hgngjr0usw5iIA5hPWl0dmMfdM9OW7JKrPdwhvJZRmEDABpE+kTm418NS+iuaCJETBzBU9eVxFs3QRMaYer/bJ/KeBGSzr9I1vD8Fdd+dpCyxXm6C4Brh0p9AnrSzLRr3J3GwWxrcLsL2HEAdxaQRpbXMaZblPRjzjGs0MiiJUScHtBbI6W51pPMaUw5PwiYwIyaCXcQQB39yXTY8qvlPleh3ZHZy4aOxuOMZjob8R/wCqcXXd4gg1m50i45CmQA1fNbUK+vTwg8rkllbKSwwXgNXtCc0LPOFfmBe0Iwj3JzMNeTCXZCMBk4GCvcJkprohGDwEIQvQBCEIAEIQgAQhCABCEIAEIQgAQhCABCEIARcpbMwBsQNk8ua0uFJjUdfHJNbBAaxgDRKdTtO8oQlqK628Hbb6cGhCEJhwCEIQAIQhAAhCEACEIQB//9k=',
    price: 150,
    discount: 0,
  },
  {
    id: 3,
    name: 'Knitted Sweater',
    description: 'Warm and cozy for winter.',
    image:
      'data:image/jpeg;base64,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',
    price: 200,
    discount: 10,
  },
  {
    id: 4,
    name: 'Handcrafted Mug',
    description: 'Beautiful ceramic mug for hot drinks.',
    image:
      'https://www.potteryfortheplanet.com/cdn/shop/products/Pottery-For-The-Planet-Ceramic-Mug-12oz-20_313x.jpg?v=1742863557',
    price: 100,
    discount: 20,
  },
  {
    id: 5,
    name: 'Handcrafted Mug',
    description: 'Beautiful ceramic mug for hot drinks.',
    image:
      'https://www.potteryfortheplanet.com/cdn/shop/products/Pottery-For-The-Planet-Ceramic-Mug-12oz-20_313x.jpg?v=1742863557',
    price: 100,
    discount: 20,
  },
  {
    id: 6,
    name: 'Handcrafted Mug',
    description: 'Beautiful ceramic mug for hot drinks.',
    image:
      'https://www.potteryfortheplanet.com/cdn/shop/products/Pottery-For-The-Planet-Ceramic-Mug-12oz-20_313x.jpg?v=1742863557',
    price: 100,
    discount: 20,
  },
  {
    id: 7,
    name: 'Handcrafted Mug',
    description: 'Beautiful ceramic mug for hot drinks.',
    image:
      'https://www.potteryfortheplanet.com/cdn/shop/products/Pottery-For-The-Planet-Ceramic-Mug-12oz-20_313x.jpg?v=1742863557',
    price: 100,
    discount: 20,
  },
  {
    id: 8,
    name: 'Handcrafted Mug',
    description: 'Beautiful ceramic mug for hot drinks.',
    image:
      'https://www.potteryfortheplanet.com/cdn/shop/products/Pottery-For-The-Planet-Ceramic-Mug-12oz-20_313x.jpg?v=1742863557',
    price: 100,
    discount: 20,
  },
  {
    id: 9,
    name: 'Handcrafted Mug',
    description: 'Beautiful ceramic mug for hot drinks.',
    image:
      'https://www.potteryfortheplanet.com/cdn/shop/products/Pottery-For-The-Planet-Ceramic-Mug-12oz-20_313x.jpg?v=1742863557',
    price: 100,
    discount: 20,
  },
  {
    id: 10,
    name: 'Handcrafted Mug',
    description: 'Beautiful ceramic mug for hot drinks.',
    image:
      'https://www.potteryfortheplanet.com/cdn/shop/products/Pottery-For-The-Planet-Ceramic-Mug-12oz-20_313x.jpg?v=1742863557',
    price: 100,
    discount: 20,
  },
  {
    id: 11,
    name: 'Handcrafted Mug',
    description: 'Beautiful ceramic mug for hot drinks.',
    image:
      'https://www.potteryfortheplanet.com/cdn/shop/products/Pottery-For-The-Planet-Ceramic-Mug-12oz-20_313x.jpg?v=1742863557',
    price: 100,
    discount: 20,
  },
  {
    id: 12,
    name: 'Handcrafted Mug',
    description: 'Beautiful ceramic mug for hot drinks.',
    image:
      'https://www.potteryfortheplanet.com/cdn/shop/products/Pottery-For-The-Planet-Ceramic-Mug-12oz-20_313x.jpg?v=1742863557',
    price: 100,
    discount: 20,
  },
];
const Orders = () => {
  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Products</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transform hover:scale-105 transition"
            >
              <div className="absolute top-3 right-3 p-1 bg-white rounded-full shadow">
                <BsThreeDotsVertical className="text-gray-400 text-sm" />
              </div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  {product.description}
                </p>

                <div className="mt-3 text-sm text-green-700 font-bold">
                  ${product.price.toFixed(2)}
                </div>

                <div className="mt-3 text-xs text-gray-500 space-y-1">
                  <p>Ordered on: {product.orderDate}</p>
                  <p>Estimated delivery: {product.deliveryTime}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="mt-3 text-xs text-gray-500 text-right">
                    Total: 3
                  </p>
                  <p className=" mt-3 text-xs text-gray-500 text-right">
                    Seller
                  </p>
                </div>

                <NavLink to={'/view-product/1'}>
                  <button className="mt-4 w-full bg-blue-600 text-white text-sm py-2 rounded-md hover:bg-blue-700 transition">
                    View Details
                  </button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
