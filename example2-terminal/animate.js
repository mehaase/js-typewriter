function animate(typewriter) {
    sequence = [
        {
            text: "trinity@localhost:~$ ",
            instant: true,
            delayAfter: 500
        },
        {
            text: "whoami\n",
            delayAfter: 500
        },
        {
            text: "trinity@the-matrix.net\ntrinity@localhost:~$ ",
            instant: true,
            delayAfter: 500
        },
        {
            text: "scp root@192.168.54.99:rickastley.mp4\b\b\b\b\b\b\b\b\b\b\b\b\b\bvirus.tgz .\n",
            delayAfter: 1000,
            callback: function () {console.log("Hehe... joke.")}
        },
        {
            text: "328392 bytes transferred\ntrinity@localhost:~$ ",
            instant: true,
            delayAfter: 500
        },
        {
            text: "ls -l\n",
            delayAfter: 1000
        },
        {
            text: "total 96\ndrwxrwxr-x 2 trinity trinity  4096 Jun 26 21:59 ./\n"
                + "drwxr-xr-x 6 trinity trinity   4096 Jun 26 21:57 ../\n"
                + "-rw-rw-r-- 1 trinity trinity 328392 Jun 26 21:58 virus.tgz\n"
                + "trinity@localhost:~$ ",
            instant: true,
            delayAfter: 500
        },
        {
            text: "tar xzf virus.tgz\n",
            delayAfter: 1500
        },
        {
            text: "trinity@localhost:~$ ",
            instant: true,
            delayAfter: 500
        },
        {
            text: "sudo ./virus/shellshock\n",
            delayAfter: 1500
        },
        {
            text: "tr1n1tEEE@l0c!1ho3t:~$ ",
            instant: true,
            delayAfter: 1000
        },
        {
            text: "*&@JDJK@()LKSGFSJA)",
            instant: true,
            delayAfter: 1000
        },
        {
            text: "\n\n-- LINE DISCONNECTED --",
            instant: true
        },
    ];

    typewriter.playSequence(sequence);
}
