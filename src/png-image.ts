import { __native_PngImage } from "./native";

/**
 * The color type from libpng represented as a string.
 * This describes how the actual image pixels are defined.
 */
export enum ColorType {
    /**
     * Libpng color type `PNG_COLOR_TYPE_GRAY` (0).
     */
    GRAY = "gray",
    /**
     * Libpng color type `PNG_COLOR_TYPE_RGB` (2).
     */
    RGB = "rgb",
    /**
     * Libpng color type `PNG_COLOR_TYPE_PALETTE` (3).
     */
    PALETTE = "palette",
    /**
     * Libpng color type `PNG_COLOR_TYPE_GRAY_ALPHA` (4).
     */
    GRAY_ALPHA = "gray-alpha",
    /**
     * Libpng color type `PNG_COLOR_TYPE_RGB_ALPHA ` (6).
     */
    RGBA = "rgba",
    /**
     * Color type parsing failed.
     */
    UNKNOWN = "unknown",
}

/**
 * The interlace type from libpng.
 */
export enum InterlaceType {
    /**
     * Libpng interlace type `PNG_INTERLACE_NONE` (0).
     */
    NONE = "none",
    /**
     * Libpng interlace type `PNG_INTERLACE_ADAM7` (1).
     */
    ADAM7 = "adam7",
    /**
     * Interlace type parsing failed.
     */
    UNKNOWN = "unknown",
}

export class PngImage {
    private nativePng: any;

    constructor(buffer: Buffer) {
        this.nativePng = new __native_PngImage(buffer);
    }

    /**
     * The bit depth of the image.
     * Gathered from `png_get_bit_depth`.
     */
    public get bitDepth(): number { return this.nativePng.bitDepth; }

    /**
     * The amount of channels of the image.
     * Gathered from `png_get_channels`.
     */
    public get channels(): number { return this.nativePng.channels; }

    /**
     * The color type of the image as a string.
     * Gathered from `png_get_color_type`.
     */
    public get colorType(): ColorType { return this.nativePng.colorType; }

    /**
     * The width of the image.
     * Gathered from `png_get_image_height`.
     */
    public get height(): number { return this.nativePng.height; }

    /**
     * The width of the image.
     * Gathered from `png_get_image_width`.
     */
    public get width(): number { return this.nativePng.width; }

    /**
     * The interlace type of the image as a string, gathered from `png_get_interlace_type`.
     */
    public get interlaceType(): InterlaceType { return this.nativePng.interlaceType; }

    /**
     * The amount of bytes per row of the image.
     * Gathered from `png_get_rowbytes`.
     */
    public get rowBytes(): number { return this.nativePng.rowBytes; }

    /**
     * The horizontal offset of the image.
     * Gathered from `png_get_x_offset_pixels`.
     */
    public get offsetX(): number { return this.nativePng.offsetX; }

    /**
     * The vertical offset of the image.
     * Gathered from `png_get_y_offset_pixels`.
     */
    public get offsetY(): number { return this.nativePng.offsetY; }

    /**
     * The horizontal amount of pixels per meter of the image.
     * Gathered from `png_get_x_pixels_per_meter`.
     */
    public get pixelsPerMeterX(): number { return this.nativePng.pixelsPerMeterX; }

    /**
     * The vertical amount of pixels per meter of the image.
     * Gathered from `png_get_y_pixels_per_meter`.
     */
    public get pixelsPerMeterY(): number { return this.nativePng.pixelsPerMeterY; }

    /**
     * The buffer containing the data of the decoded image.
     */
    public get data(): Buffer { return this.nativePng.data; }
}
