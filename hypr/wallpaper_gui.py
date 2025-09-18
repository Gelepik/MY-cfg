#!/usr/bin/env python3
import gi
import os
import subprocess

gi.require_version("Gtk", "3.0")
from gi.repository import Gtk, GdkPixbuf

# Папка с обоями
wallpaper_dir = os.path.expanduser("~/Pictures/Wallpapers")
wallpapers = [os.path.join(wallpaper_dir, f) for f in os.listdir(wallpaper_dir) if f.endswith((".jpg", ".png"))]

class WallpaperChooser(Gtk.Window):
    def __init__(self):
        super().__init__(title="Выберите обои")
        self.set_border_width(10)
        self.set_default_size(400, 300)

        self.listbox = Gtk.ListBox()
        self.add(self.listbox)

        for wp in wallpapers:
            row = Gtk.ListBoxRow()
            hbox = Gtk.Box(orientation=Gtk.Orientation.HORIZONTAL, spacing=10)
            row.add(hbox)

            # Миниатюра
            pixbuf = GdkPixbuf.Pixbuf.new_from_file_at_scale(wp, 100, 60, True)
            image = Gtk.Image.new_from_pixbuf(pixbuf)
            hbox.pack_start(image, False, False, 0)

            # Название файла
            label = Gtk.Label(label=os.path.basename(wp), xalign=0)
            hbox.pack_start(label, True, True, 0)

            # Привязка клика
            row.connect("activate", self.on_wallpaper_selected, wp)

            self.listbox.add(row)

        self.show_all()

    def on_wallpaper_selected(self, widget, path):
        subprocess.run(["swww", "img", path, "--transition-type", "fade", "--transition-duration", "1"])
        Gtk.main_quit()

win = WallpaperChooser()
win.connect("destroy", Gtk.main_quit)
Gtk.main()
