# 注意点

- Node 版本与 Electron 版本要匹配。项目中用的是 Node@16 和 Electron@23.
- 如果使用 npm 安装老失败，可以尝试使用 yarn/pnpm.

## 显示器亮度

DDC/CI（Display Data Channel Command Interface）是一种用于通过显像信号线缆（如 DVI、D-Sub（VGA）和 DisplayPort）控制显示器的协议。它由 VESA 规范定义，并且许多 PC 显示器都支持它。使用 DDC/CI，您可以在不触摸显示器的情况下更改设置，非常方便。例如，您可以使用 DDC/CI 来调整外接显示器的亮度。许多显示器制造商提供了支持 DDC/CI 的应用程序，例如 EIZO 的 Screen Manager Pro。此外，您还可以使用免费软件 ControlMyMonitor 来查看和更改显示器支持的 DDC/CI 控制项。如果您是开发人员，您可以使用 Win32API 或 Linux 的开源项目来编写支持 DDC/CI 的程序。总之，DDC/CI 是一个方便的协议，可通过信号线控制显示器设置。

调用 NodeJS 三方包 brightness。存在一个问题：在部分显示屏上不生效。尝试了其他几个三方软件，同样的无法在外接显示屏上生效（正在思考有无解决方案......）。

关于 brightness 包，在部分机器上运行时会报错（正在思考有无解决方案......）。

## 音量

直接使用 NodeJS 三方包 loudness。
