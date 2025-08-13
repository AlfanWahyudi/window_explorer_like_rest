import { t } from "elysia";

const successResponse = t.Object({
  success: t.Boolean(),
  message: t.String(),
  data: t.Any()
})

const errorResponse = t.Object({
  success: t.Boolean(),
  error: t.Any(),
})

type SuccessResponse = typeof successResponse.static
type ErrorResponse = typeof errorResponse.static

export {
  SuccessResponse,
  successResponse,
  ErrorResponse,
  errorResponse
}